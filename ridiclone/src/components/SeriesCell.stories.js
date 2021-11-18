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
