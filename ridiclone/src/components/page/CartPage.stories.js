import React from "react";
import CartPage from "./CartPage";

export default {
  component: CartPage,
  title: "CartPage",
};

const Template = (args) => <CartPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
