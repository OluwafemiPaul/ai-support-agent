import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make sure the markdown help articles ship with the serverless functions on Vercel.
  outputFileTracingIncludes: {
    "/api/chat": ["./knowledge-base/**/*"],
    "/docs/[id]": ["./knowledge-base/**/*"],
    "/docs": ["./knowledge-base/**/*"],
  },
};

export default nextConfig;
