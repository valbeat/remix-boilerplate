import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ExampleButton } from "./ExampleButton";

const meta: Meta<typeof ExampleButton> = {
	component: ExampleButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		onClick: fn(),
		children: "Example Button",
	},
};
