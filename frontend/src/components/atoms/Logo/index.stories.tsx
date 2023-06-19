import Logo from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
export default {
  title: "Atoms/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;
const Template: ComponentStory<typeof Logo> = () => <Logo />;
export const logo = Template.bind({});
