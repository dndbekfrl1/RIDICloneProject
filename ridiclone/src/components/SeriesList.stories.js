import React from "react";
import SeriesList from "./SeriesList";

export default {
  component: SeriesList,
  title: "SeriesList",
};

const Template = (args) => <SeriesList {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "짱 재미있는 웹소설",
  count: 15, //총 권 수
  freeCount: 6, // 무료 권 수
};
