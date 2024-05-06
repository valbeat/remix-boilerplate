import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { ExampleButton } from "./ExampleButton";

const meta: Meta<typeof ExampleButton> = {
	component: ExampleButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		onClick: action("clicked"),
		children: "Example Button",
	},
};
