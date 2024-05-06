import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "node:path";

// biome-ignore lint/suspicious/noExplicitAny: default code
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
	stories: ["../app/**/*.mdx", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-interactions"),
		getAbsolutePath("@storybook/addon-mdx-gfm"),
		getAbsolutePath("@storybook/addon-mdx-gfm"),
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
