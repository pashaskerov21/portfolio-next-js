"use client"
import React, { useEffect, useRef } from 'react'

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

            // === SCENE ===
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 3000)
            camera.position.z = 900

            renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' })
            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2))
            mount.appendChild(renderer.domElement)

            // === STARS ===
            const starTexture = new THREE.TextureLoader().load(
                'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/circle.png'
            )

            const positions = new Float32Array(STAR_COUNT * 3)
            const colors = new Float32Array(STAR_COUNT * 3)
            const colorChoices = [
                new THREE.Color(0xffffff),
                new THREE.Color(0xffd966),
                new THREE.Color(0xff6f6f),
            ]

            for (let i = 0; i < STAR_COUNT; i++) {
                const i3 = i * 3
                positions[i3]     = (Math.random() - 0.5) * 2000
                positions[i3 + 1] = (Math.random() - 0.5) * 2000
                positions[i3 + 2] = (Math.random() - 0.5) * 2000
                const c = colorChoices[Math.floor(Math.random() * colorChoices.length)]
                colors[i3] = c.r; colors[i3 + 1] = c.g; colors[i3 + 2] = c.b
            }

            const geometry = new THREE.BufferGeometry()
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

            const material = new THREE.PointsMaterial({
                map: starTexture,
                vertexColors: true,
                transparent: true,
                size: isMobile ? 1.2 : 1.5,
                sizeAttenuation: true,
                alphaTest: 0.01,
            })

            scene.add(new THREE.Points(geometry, material))

            // === BLOOM (desktop only) ===
            composer = new EffectComposer(renderer)
            composer.addPass(new RenderPass(scene, camera))
            if (USE_BLOOM) {
                composer.addPass(new UnrealBloomPass(
                    new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.85
                ))
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
            const animate = () => {
                animId = requestAnimationFrame(animate)
                if (document.hidden || !isDark()) return

                if (performance.now() - lastScroll > 150) rotationTarget = 0.0004
                rotationSpeed += (rotationTarget - rotationSpeed) * 0.05
                scene.rotation.y += rotationSpeed
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

            // store cleanup refs
            ;(mount as HTMLDivElement & { _cleanup?: () => void })._cleanup = () => {
                cancelAnimationFrame(animId)
                window.removeEventListener('wheel', onWheel)
                window.removeEventListener('resize', onResize)
                composer?.dispose()
                renderer?.dispose()
                geometry.dispose()
                material.dispose()
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
