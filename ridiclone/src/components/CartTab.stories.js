import React from "react";
import CartTab from "./CartTab";

export default {
  component: CartTab,
  title: "CartTab",
};

const Template = (args) => <CartTab {...args} />;

export const Default = Template.bind({});
Default.args = {};
