import React from "react";
import SeriesCell from "./SeriesCell";

export default {
  component: SeriesCell,
  title: "SeriesCell",
};

const Template = (args) => <SeriesCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "세상에서 가장 재미있는 판타지 소설",
};

export const FreeLabel = Template.bind({});
FreeLabel.args = {
  title: "세상에서 가장 재미있는 판타지 소설",
  isFree: true,
};

export const Selected = Template.bind({});
Selected.args = {
  title: "세상에서 가장 재미있는 판타지 소설",
  isSelected: "selected",
};
