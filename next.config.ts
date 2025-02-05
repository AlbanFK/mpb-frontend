import type { NextConfig } from "next";
// import nextI18nextConfig from "./next-i18next.config";

const nextConfig: NextConfig = {
  /* config options here */
  // i18n: nextI18nextConfig.i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/photos-premium/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
