import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as Stories from "./ExampleButton.stories";

const { Default } = composeStories(Stories);

it("renders correctly", () => {
	const { asFragment } = render(<Default />);
	expect(asFragment()).toMatchSnapshot();
});
