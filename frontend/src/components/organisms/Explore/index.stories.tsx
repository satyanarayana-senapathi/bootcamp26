import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Explore from ".";
export default {
  title: "Organisms/Explore",
  component: Explore,
} as ComponentMeta<typeof Explore>;
const Template: ComponentStory<typeof Explore> = () => <Explore />;
export const exploreButton = Template.bind({});
