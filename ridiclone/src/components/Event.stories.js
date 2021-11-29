import React from "react";
import Event from "./Event";

export default {
  component: Event,
  title: "Event",
};

const Template = (args) => <Event {...args} />;

export const Default = Template.bind({});
Default.args = {
  event: {
    thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg",
    details: "https://i.esdrop.com/d/1o9bbwj5cf0u/CEsi6djr3E.jpg",
  },
};
