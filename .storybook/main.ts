import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

// biome-ignore lint/suspicious/noExplicitAny: default code
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	stories: ["../app/**/*.mdx", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@chromatic-com/storybook"),
	],
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {
			builder: {
				viteConfigPath: "vite-sb.config.ts",
			},
		},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
