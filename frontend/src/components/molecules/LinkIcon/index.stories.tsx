import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import LinkIcon from ".";
import KeyboardArrowRight from "../../../assets/icons/keyboard-arrow-right-24-px.svg";

export default {
  title: "Molecules/Link Icon",
  component: LinkIcon,
} as ComponentMeta<typeof LinkIcon>;
const Template: ComponentStory<typeof LinkIcon> = (args) => (
  <LinkIcon {...args} />
);
export const link = Template.bind({});
link.args = {
  text: "See more",
  endIcon: KeyboardArrowRight,
  hoverColor: "red",
  imageProps: {
    width: "7px",
    height: "10px",
  },
  textTypography: {
    variant: "subtitle2",
    color: "primary.main",
  },
};
