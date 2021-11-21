import React from "react";
import CartCell from "./CartCell";

export default {
  component: CartCell,
  title: "CartCell",
};

const Template = (args) => <CartCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
  title: "Diabetes",
  author_name: "Reeta Loukes",
  buyPrice: 34885,
  buySalePercent: 32,
};
