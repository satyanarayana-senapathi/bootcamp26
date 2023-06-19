import React from "react";
import Image from ".";
import img from "../../../assets/leaf.png";

export default {
  title: "atoms/image",
  component: Image,
};

export const component = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <Image {...props} />
);

component.args = {
  src: img,
  alt: "leaf",
};
