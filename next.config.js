/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'serverless', // Esta es la opción que te permite desplegar tu sitio en una plataforma como Vercel o Netlify
  images: {
    domains: ['cdn.sanity.io', 'i.imgur.com'], // Agrega 'i.imgur.com' a la lista de dominios permitidos
  },
};

module.exports = nextConfig;
