import { composeStories } from "@storybook/react";
import * as Stories from "./ExampleButton.stories";
import { render } from "@testing-library/react";

const { Default } = composeStories(Stories);

it("renders correctly", () => {
  const { asFragment } = render(<Default />);
  expect(asFragment()).toMatchSnapshot();
});
