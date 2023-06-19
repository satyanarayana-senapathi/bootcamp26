import { ComponentMeta } from "@storybook/react";
import React from "react";
import Header from ".";
export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Component = () => <Header />;
