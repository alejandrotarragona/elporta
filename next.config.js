/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'serverless', // Esta es la opción que te permite desplegar tu sitio en una plataforma como Vercel o Netlify
};

module.exports = nextConfig;