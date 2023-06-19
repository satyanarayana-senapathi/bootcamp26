import RecommendationCards from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { recommendationCardsData } from "../../../helper/recommendationCards";

export default {
  title: "Organisms/Recommendation Cards",
  component: RecommendationCards,
} as ComponentMeta<typeof RecommendationCards>;

const Template: ComponentStory<typeof RecommendationCards> = (args) => (
  <RecommendationCards {...args} />
);

export const component = Template.bind({});
component.args = {
  data: recommendationCardsData,
};
