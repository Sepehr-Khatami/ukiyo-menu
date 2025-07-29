// Create this file in your project root or in a `types/` folder
declare module "next-pwa" {
  import { NextConfig } from "next";
  import { PWAConfig } from "next-pwa/types";

  const withPWA: (config: NextConfig & { pwa?: PWAConfig }) => NextConfig;
  export default withPWA;
}
