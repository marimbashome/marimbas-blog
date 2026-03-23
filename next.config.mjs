import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath enables this app to be served under /blog on marimbashome.com
  // via Vercel rewrites from the hub project
  basePath: '/blog',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uc.orez.io',
        pathname: '/i/**',
      },
      {
        protocol: 'https',
        hostname: 'xqjjdopwinljrnxexpwd.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com',
        pathname: '/im/pictures/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
