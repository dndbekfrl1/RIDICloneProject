import React from "react";
import SeriesBuyTab from "./SeriesBuyTab";

export default {
  component: SeriesBuyTab,
  title: "SeriesBuyTab",
};

const Template = (args) => <SeriesBuyTab {...args} />;

export const Default = Template.bind({});
Default.args = {
  canRent: false,
};

export const CanRent = Template.bind({});
CanRent.args = {
  canRent: true,
  title: "짱 재미있는 웹소설",
  count: 15, //총 권 수
  freeCount: 6, // 무료 권 수
};
