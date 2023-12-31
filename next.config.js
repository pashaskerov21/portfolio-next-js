/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        BASE_URL: process.env.BASE_URL
    },
    compiler: {
        styledComponents: true
    },
}

module.exports = nextConfig
