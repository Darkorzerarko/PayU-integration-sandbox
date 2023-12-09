/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
}

module.exports = nextConfig
