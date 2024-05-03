import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
	site: config.site.base_url ? config.site.base_url : "https://workwithmavens.io",
	base: config.site.base_path ? config.site.base_path : "/",
	integrations: [
		mdx(), 
		sitemap(),
		react(),		
		tailwind()],
	vite: {
		server: {
			watch: {
				usePolling: true
			}
		}
	}
});
