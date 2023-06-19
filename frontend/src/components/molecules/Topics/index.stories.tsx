import React from "react";
import Topics, { TopicsProps } from ".";
import img from "../../../assets/test.webp";

export default {
  title: "molecules/topics",
  component: Topics,
};

export const component = (props: TopicsProps) => <Topics {...props}></Topics>;

component.args = {
  src: img,
  alt: "zemoso",
  text: "text",
};
