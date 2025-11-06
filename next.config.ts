import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';


const nextConfig: NextConfig = {
    images: {
      unoptimized: true,
      domains: [
        "images.unsplash.com",
        "placehold.co",
        "localhost",
        "api.gptnewsroom.fi",
      ],
  },
};



const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
