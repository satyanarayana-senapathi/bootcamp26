import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Pagination from ".";
export default {
  title: "Organisms/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);
export const pagination = Template.bind({});
pagination.args = {
  totalPages: 5,
  onClick: (pageNumber: number) => console.log(`currently in ${pageNumber}`),
};
