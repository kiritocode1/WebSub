import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));


//? env validation  checkout https://env.t3.gg/docs/nextjs/
jiti("./src/env/server.ts")

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		staleTimes: {
			dynamic: 3600,
		},
	},
};

export default nextConfig;
