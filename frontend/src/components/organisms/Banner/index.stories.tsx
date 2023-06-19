import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Banner from ".";
import BannerImg from "../../../assets/banner.png";

export default {
  title: "Organisms/Banner",
  component: Banner,
  argTypes: {
    handleClick: { action: "Discover Button Clicked" },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const component = Template.bind({});
component.args = {
  bannerBackground: `url(${BannerImg})`,
  children: "Discover",
};
