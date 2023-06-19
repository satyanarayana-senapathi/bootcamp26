import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainTemplate from "./MainTemplate";
import Header from "../components/organisms/Header";

export default {
  title: "Templates/MainTemplate",
  component: MainTemplate,
} as ComponentMeta<typeof MainTemplate>;

const Template: ComponentStory<typeof MainTemplate> = (args) => (
  <MainTemplate {...args}>Children</MainTemplate>
);

export const component = Template.bind({});

component.args = {
  header: <Header />,
};
