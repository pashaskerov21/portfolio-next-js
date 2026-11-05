"use client"
import React, { useEffect, useRef } from 'react'
import type * as THREE from 'three'

const Starfield: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const mount = mountRef.current
        if (!mount) return

        const isMobile = /Mobi|Android/i.test(navigator.userAgent)
        const STAR_COUNT = isMobile ? 3000 : 7000
        const USE_BLOOM = !isMobile

        let animId: number
        let composer: import('three/addons/postprocessing/EffectComposer.js').EffectComposer | null = null
        let renderer: import('three').WebGLRenderer | null = null
        let cleanupCalled = false

        const init = async () => {
            if (cleanupCalled) return

            const THREE = await import('three')
            const { EffectComposer } = await import('three/addons/postprocessing/EffectComposer.js')
            const { RenderPass } = await import('three/addons/postprocessing/RenderPass.js')
            const { UnrealBloomPass } = await import('three/addons/postprocessing/UnrealBloomPass.js')

            if (cleanupCalled) return

            // === HELPERS ===
            function gaussianRandom(): number {
                let u = 0, v = 0
                while (u === 0) u = Math.random()
                while (v === 0) v = Math.random()
                return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
            }

            function weightedColorChoice(colors: { color: THREE.Color; weight: number }[]): THREE.Color {
                const total = colors.reduce((s, c) => s + c.weight, 0)
                let r = Math.random() * total
                for (const entry of colors) {
                    r -= entry.weight
                    if (r <= 0) return entry.color
                }
                return colors[0].color
            }

            function generateGlowTexture(): THREE.CanvasTexture {
                const size = 256
                const canvas = document.createElement('canvas')
                canvas.width = size; canvas.height = size
                const ctx = canvas.getContext('2d')!
                const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
                gradient.addColorStop(0, 'rgba(255, 238, 200, 1)')
                gradient.addColorStop(0.2, 'rgba(255, 220, 180, 0.6)')
                gradient.addColorStop(0.5, 'rgba(255, 180, 130, 0.2)')
                gradient.addColorStop(1, 'rgba(255, 150, 100, 0)')
                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, size, size)
                return new THREE.CanvasTexture(canvas)
            }

            function generateNebulaTexture(color: string, texSize: number): THREE.CanvasTexture {
                const canvas = document.createElement('canvas')
                canvas.width = texSize; canvas.height = texSize
                const ctx = canvas.getContext('2d')!
                for (let i = 0; i < 6; i++) {
                    const cx = texSize / 2 + (Math.random() - 0.5) * texSize * 0.4
                    const cy = texSize / 2 + (Math.random() - 0.5) * texSize * 0.4
                    const r = texSize * (0.2 + Math.random() * 0.3)
                    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
                    gradient.addColorStop(0, color)
                    gradient.addColorStop(1, 'rgba(0,0,0,0)')
                    ctx.fillStyle = gradient
                    ctx.fillRect(0, 0, texSize, texSize)
                }
                return new THREE.CanvasTexture(canvas)
            }

            function generateStarTexture(): THREE.CanvasTexture {
                const size = 64
                const canvas = document.createElement('canvas')
                canvas.width = size; canvas.height = size
                const ctx = canvas.getContext('2d')!
                const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
                gradient.addColorStop(0, 'rgba(255,255,255,1)')
                gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)')
                gradient.addColorStop(0.6, 'rgba(255,255,255,0.3)')
                gradient.addColorStop(1, 'rgba(255,255,255,0)')
                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, size, size)
                return new THREE.CanvasTexture(canvas)
            }

            // === SCENE ===
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 3000)
            camera.position.z = 900

            renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2))
            mount.appendChild(renderer.domElement)

            // === GROUPS ===
            const galaxyGroup = new THREE.Group()
            const coreGroup = new THREE.Group()
            const nebulaGroup = new THREE.Group()
            const shootingStarGroup = new THREE.Group()
            galaxyGroup.add(coreGroup)
            galaxyGroup.add(nebulaGroup)
            scene.add(galaxyGroup)
            scene.add(shootingStarGroup)

            // === COLOR PALETTE ===
            const colorChoices = [
                { color: new THREE.Color(0xffffff), weight: 20 },
                { color: new THREE.Color(0xaac8ff), weight: 25 },
                { color: new THREE.Color(0xb8d4ff), weight: 10 },
                { color: new THREE.Color(0xffe4b5), weight: 15 },
                { color: new THREE.Color(0xffd966), weight: 10 },
                { color: new THREE.Color(0xff9ecd), weight: 10 },
                { color: new THREE.Color(0xff6f6f), weight: 10 },
            ]

            // === STAR TEXTURE (procedural) ===
            const starTexture = generateStarTexture()

            // === SHADER MATERIAL ===
            const vertexShader = `
                attribute float aSize;
                attribute float aPhase;
                uniform float uTime;
                uniform float uPixelRatio;
                varying vec3 vColor;
                varying float vBrightness;

                void main() {
                    vColor = color;
                    vBrightness = 0.75 + 0.25 * sin(uTime * 1.5 + aPhase);
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = aSize * uPixelRatio * (300.0 / -mvPosition.z);
                    gl_PointSize = clamp(gl_PointSize, 0.5, 20.0);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `

            const fragmentShader = `
                uniform sampler2D uTexture;
                varying vec3 vColor;
                varying float vBrightness;

                void main() {
                    vec4 texColor = texture2D(uTexture, gl_PointCoord);
                    if (texColor.a < 0.01) discard;
                    gl_FragColor = vec4(vColor * vBrightness, texColor.a);
                }
            `

            const starMaterial = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    uTime: { value: 0 },
                    uTexture: { value: starTexture },
                    uPixelRatio: { value: Math.min(window.devicePixelRatio, isMobile ? 1 : 2) },
                },
                vertexColors: true,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            })

            // === SPIRAL GALAXY GENERATION ===
            const ARMS = 3
            const ARM_SPREAD = 0.6
            const RADIUS_MAX = 900
            const SPIRAL_TIGHTNESS = 0.3
            const BULGE_RATIO = 0.15
            const BULGE_RADIUS = 80

            function generateStarLayer(count: number, sizeMin: number, sizeMax: number): {
                geometry: THREE.BufferGeometry
                positions: Float32Array
                colors: Float32Array
                sizes: Float32Array
                phases: Float32Array
            } {
                const positions = new Float32Array(count * 3)
                const colors = new Float32Array(count * 3)
                const sizes = new Float32Array(count)
                const phases = new Float32Array(count)

                const bulgeCount = Math.floor(count * BULGE_RATIO)

                for (let i = 0; i < count; i++) {
                    const i3 = i * 3
                    let x: number, y: number, z: number

                    if (i < bulgeCount) {
                        // Central bulge — dense spherical cluster
                        const r = Math.pow(Math.random(), 1.5) * BULGE_RADIUS
                        const theta = Math.random() * Math.PI * 2
                        const phi = Math.acos(2 * Math.random() - 1)
                        x = r * Math.sin(phi) * Math.cos(theta)
                        y = r * Math.sin(phi) * Math.sin(theta) * 0.4
                        z = r * Math.cos(phi)
                    } else {
                        // Spiral arm distribution
                        const armIndex = Math.floor(Math.random() * ARMS)
                        const armAngleOffset = (armIndex / ARMS) * Math.PI * 2

                        const r = Math.pow(Math.random(), 0.7) * RADIUS_MAX
                        const spiralAngle = SPIRAL_TIGHTNESS * Math.log(r + 1) + armAngleOffset
                        const spreadSigma = ARM_SPREAD * (r / RADIUS_MAX)
                        const theta = spiralAngle + gaussianRandom() * spreadSigma

                        x = r * Math.cos(theta)
                        z = r * Math.sin(theta)

                        const ySigma = 40 * (1 - 0.5 * (r / RADIUS_MAX))
                        y = gaussianRandom() * ySigma
                    }

                    positions[i3] = x
                    positions[i3 + 1] = y
                    positions[i3 + 2] = z

                    const c = weightedColorChoice(colorChoices)
                    colors[i3] = c.r
                    colors[i3 + 1] = c.g
                    colors[i3 + 2] = c.b

                    // Size: mostly small, rare large "giant" stars
                    const sizeRoll = Math.random()
                    if (sizeRoll > 0.98) {
                        sizes[i] = sizeMax * (2.0 + Math.random() * 2.0) // bright giants
                    } else if (i < bulgeCount) {
                        sizes[i] = sizeMax * (0.8 + Math.random() * 1.2) // bulge stars slightly larger
                    } else {
                        sizes[i] = sizeMin + Math.random() * (sizeMax - sizeMin)
                    }

                    phases[i] = Math.random() * Math.PI * 2
                }

                const geometry = new THREE.BufferGeometry()
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
                geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
                geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
                geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))

                return { geometry, positions, colors, sizes, phases }
            }

            // === PARALLAX LAYERS ===
            const layerConfigs = isMobile
                ? [
                    { ratio: 0.6, speedMult: 0.7, sizeMin: 0.5, sizeMax: 1.5 },
                    { ratio: 0.4, speedMult: 1.4, sizeMin: 0.8, sizeMax: 2.5 },
                ]
                : [
                    { ratio: 0.4, speedMult: 0.6, sizeMin: 0.4, sizeMax: 1.2 },
                    { ratio: 0.35, speedMult: 1.0, sizeMin: 0.6, sizeMax: 1.8 },
                    { ratio: 0.25, speedMult: 1.6, sizeMin: 0.8, sizeMax: 2.5 },
                ]

            const layerGroups: THREE.Group[] = []
            const layerGeometries: THREE.BufferGeometry[] = []

            for (const config of layerConfigs) {
                const count = Math.floor(STAR_COUNT * config.ratio)
                const { geometry } = generateStarLayer(count, config.sizeMin, config.sizeMax)
                const points = new THREE.Points(geometry, starMaterial)
                const group = new THREE.Group()
                group.add(points)
                galaxyGroup.add(group)
                layerGroups.push(group)
                layerGeometries.push(geometry)
            }

            // === CORE GLOW ===
            const glowTexture = generateGlowTexture()
            const glowMaterial = new THREE.SpriteMaterial({
                map: glowTexture,
                color: 0xffeecc,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.35,
                depthWrite: false,
            })
            const glowSprite = new THREE.Sprite(glowMaterial)
            glowSprite.scale.set(350, 350, 1)
            coreGroup.add(glowSprite)

            // === NEBULA LAYERS ===
            const nebulaColors = ['rgba(107,63,160,0.4)', 'rgba(42,74,138,0.4)', 'rgba(138,42,90,0.4)', 'rgba(26,90,106,0.4)']
            const nebulaCount = isMobile ? 2 : 4
            const nebulaTexSize = isMobile ? 256 : 512
            const nebulaMaterials: THREE.MeshBasicMaterial[] = []
            const nebulaGeometries: THREE.PlaneGeometry[] = []
            const nebulaTextures: THREE.CanvasTexture[] = []

            for (let i = 0; i < nebulaCount; i++) {
                const tex = generateNebulaTexture(nebulaColors[i % nebulaColors.length], nebulaTexSize)
                nebulaTextures.push(tex)
                const size = 400 + Math.random() * 400
                const geo = new THREE.PlaneGeometry(size, size)
                nebulaGeometries.push(geo)
                const mat = new THREE.MeshBasicMaterial({
                    map: tex,
                    transparent: true,
                    opacity: 0.07 + Math.random() * 0.05,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false,
                    side: THREE.DoubleSide,
                })
                nebulaMaterials.push(mat)
                const mesh = new THREE.Mesh(geo, mat)
                mesh.position.set(
                    (Math.random() - 0.5) * 600,
                    (Math.random() - 0.5) * 100,
                    (Math.random() - 0.5) * 600,
                )
                mesh.rotation.set(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                )
                nebulaGroup.add(mesh)
            }

            // === BLOOM (desktop only) ===
            composer = new EffectComposer(renderer)
            composer.addPass(new RenderPass(scene, camera))
            if (USE_BLOOM) {
                composer.addPass(new UnrealBloomPass(
                    new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.85
                ))
            }

            // === SHOOTING STARS ===
            interface ShootingStar {
                line: THREE.Line
                geometry: THREE.BufferGeometry
                material: THREE.LineBasicMaterial
                head: THREE.Vector3
                velocity: THREE.Vector3
                life: number
                speed: number
                trailLength: number
            }

            let activeShootingStar: ShootingStar | null = null
            let lastShootingTime = performance.now()
            const SHOOTING_MIN = isMobile ? 10000 : 5000
            const SHOOTING_MAX = isMobile ? 20000 : 10000
            let nextShootingDelay = SHOOTING_MIN + Math.random() * (SHOOTING_MAX - SHOOTING_MIN)

            function spawnShootingStar(): ShootingStar {
                const startAngle = Math.random() * Math.PI * 2
                const startR = 500 + Math.random() * 300
                const head = new THREE.Vector3(
                    Math.cos(startAngle) * startR,
                    (Math.random() - 0.5) * 150,
                    Math.sin(startAngle) * startR,
                )
                const dir = head.clone().negate().normalize()
                dir.x += (Math.random() - 0.5) * 0.5
                dir.z += (Math.random() - 0.5) * 0.5
                dir.normalize()

                const trailLength = 8
                const positions = new Float32Array(trailLength * 3)
                for (let i = 0; i < trailLength; i++) {
                    positions[i * 3] = head.x
                    positions[i * 3 + 1] = head.y
                    positions[i * 3 + 2] = head.z
                }
                const geometry = new THREE.BufferGeometry()
                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
                const material = new THREE.LineBasicMaterial({
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.9,
                    blending: THREE.AdditiveBlending,
                })
                const line = new THREE.Line(geometry, material)
                shootingStarGroup.add(line)
                return {
                    line, geometry, material, head, velocity: dir,
                    life: 0, speed: 12 + Math.random() * 8, trailLength,
                }
            }

            function updateShootingStar(star: ShootingStar, delta: number) {
                star.life += delta * 0.8
                const posArr = star.geometry.attributes.position.array as Float32Array
                // Shift trail positions backward
                for (let i = star.trailLength - 1; i > 0; i--) {
                    posArr[i * 3] = posArr[(i - 1) * 3]
                    posArr[i * 3 + 1] = posArr[(i - 1) * 3 + 1]
                    posArr[i * 3 + 2] = posArr[(i - 1) * 3 + 2]
                }
                // Move head
                star.head.addScaledVector(star.velocity, star.speed)
                posArr[0] = star.head.x
                posArr[1] = star.head.y
                posArr[2] = star.head.z
                star.geometry.attributes.position.needsUpdate = true
                // Fade out
                star.material.opacity = Math.max(0, 0.9 * (1 - star.life))
            }

            function removeShootingStar(star: ShootingStar) {
                shootingStarGroup.remove(star.line)
                star.geometry.dispose()
                star.material.dispose()
            }

            // === MOUSE PARALLAX ===
            let mouseX = 0, mouseY = 0
            const onMouseMove = (e: MouseEvent) => {
                mouseX = (e.clientX / window.innerWidth - 0.5) * 2
                mouseY = (e.clientY / window.innerHeight - 0.5) * 2
            }
            if (!isMobile) {
                window.addEventListener('mousemove', onMouseMove)
            }

            // === SCROLL ROTATION ===
            let rotationSpeed = 0.0004
            let rotationTarget = rotationSpeed
            let lastScroll = 0

            const onWheel = (e: WheelEvent) => {
                rotationTarget = e.deltaY > 0 ? 0.015 : -0.015
                lastScroll = performance.now()
            }
            window.addEventListener('wheel', onWheel)

            const isDark = () => document.documentElement.classList.contains('dark')

            // === ANIMATE ===
            let lastFrameTime = performance.now()
            let elapsed = 0

            const animate = () => {
                animId = requestAnimationFrame(animate)
                if (document.hidden || !isDark()) return

                const frameNow = performance.now()
                const delta = (frameNow - lastFrameTime) / 1000
                lastFrameTime = frameNow
                elapsed += delta

                // Update shader time
                starMaterial.uniforms.uTime.value = elapsed

                // Scroll rotation
                if (performance.now() - lastScroll > 150) rotationTarget = 0.0004
                rotationSpeed += (rotationTarget - rotationSpeed) * 0.05

                // Apply rotation to layers at different speeds
                for (let i = 0; i < layerGroups.length; i++) {
                    layerGroups[i].rotation.y += rotationSpeed * layerConfigs[i].speedMult
                }
                coreGroup.rotation.y += rotationSpeed * 0.8
                nebulaGroup.rotation.y += rotationSpeed * 0.4

                // Mouse parallax (desktop)
                if (!isMobile) {
                    const targetRotX = -mouseY * 0.035
                    const targetRotY = mouseX * 0.035
                    camera.rotation.x += (targetRotX - camera.rotation.x) * 0.02
                    camera.rotation.y += (targetRotY - camera.rotation.y) * 0.02
                }

                // Shooting stars
                const now = performance.now()
                if (!activeShootingStar && now - lastShootingTime > nextShootingDelay) {
                    activeShootingStar = spawnShootingStar()
                    lastShootingTime = now
                    nextShootingDelay = SHOOTING_MIN + Math.random() * (SHOOTING_MAX - SHOOTING_MIN)
                }
                if (activeShootingStar) {
                    updateShootingStar(activeShootingStar, delta)
                    if (activeShootingStar.life > 1) {
                        removeShootingStar(activeShootingStar)
                        activeShootingStar = null
                    }
                }

                composer!.render()
            }
            animate()

            // === RESIZE ===
            const onResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight
                camera.updateProjectionMatrix()
                renderer!.setSize(window.innerWidth, window.innerHeight)
                composer!.setSize(window.innerWidth, window.innerHeight)
            }
            window.addEventListener('resize', onResize)

            // === CLEANUP ===
            ;(mount as HTMLDivElement & { _cleanup?: () => void })._cleanup = () => {
                cancelAnimationFrame(animId)
                window.removeEventListener('wheel', onWheel)
                window.removeEventListener('resize', onResize)
                if (!isMobile) window.removeEventListener('mousemove', onMouseMove)

                // Dispose shooting star
                if (activeShootingStar) removeShootingStar(activeShootingStar)

                // Dispose star layers
                for (const geo of layerGeometries) geo.dispose()
                starMaterial.dispose()
                starTexture.dispose()

                // Dispose core glow
                glowMaterial.dispose()
                glowTexture.dispose()

                // Dispose nebula
                for (const mat of nebulaMaterials) mat.dispose()
                for (const geo of nebulaGeometries) geo.dispose()
                for (const tex of nebulaTextures) tex.dispose()

                // Dispose composer & renderer
                composer?.dispose()
                renderer?.dispose()
                if (renderer?.domElement.parentNode === mount) {
                    mount.removeChild(renderer.domElement)
                }
            }
        }

        // Defer until browser is idle so it doesn't block page load
        const scheduleInit = () => {
            if ('requestIdleCallback' in window) {
                (window as Window & { requestIdleCallback: (cb: () => void) => void })
                    .requestIdleCallback(init)
            } else {
                setTimeout(init, 300)
            }
        }

        if (document.readyState === 'complete') {
            scheduleInit()
        } else {
            window.addEventListener('load', scheduleInit, { once: true })
        }

        return () => {
            cleanupCalled = true
            const el = mount as HTMLDivElement & { _cleanup?: () => void }
            el._cleanup?.()
        }
    }, [])

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    )
}

export default Starfield
