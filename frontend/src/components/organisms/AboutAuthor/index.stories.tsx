import AboutAuthor from ".";
import { ComponentMeta } from "@storybook/react";
import React from "react";
import { aboutAuthorBooks } from "../../../helper/aboutAuthorCards";

export default {
  title: "Organisms/AboutAuthor",
  component: AboutAuthor,
} as ComponentMeta<typeof AboutAuthor>;

export const Component = () => <AboutAuthor data={aboutAuthorBooks} />;
