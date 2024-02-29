/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  secret : process.env.NEXTAUTH_SECRET
}

module.exports = nextConfig
