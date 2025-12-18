/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'o2aicorp.com',
          },
        ],
        destination: 'https://www.o2aicorp.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
