import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import ExploreMenuHeader from ".";
export default {
  title: "Molecules/ Explore Menu Header",
  component: ExploreMenuHeader,
} as ComponentMeta<typeof ExploreMenuHeader>;
const Template: ComponentStory<typeof ExploreMenuHeader> = (args) => (
  <ExploreMenuHeader {...args} />
);
export const exploreMenuHeader = Template.bind({});
exploreMenuHeader.args = {
  handleClose: () => console.log("closed the explore menu"),
};
