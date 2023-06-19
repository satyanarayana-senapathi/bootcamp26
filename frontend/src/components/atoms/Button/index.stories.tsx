import Button from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Atoms/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const component = Template.bind({});
component.args = {
  variant: "contained",
  children: "Discover",
  sx: {
    textTransform: "none",
  },
};
