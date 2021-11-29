import React from "react";
import Categories from "./Categories";

export default {
  component: Categories,
  title: "Categories",
};


const Template = (args) => <Categories {...args} />;


export const Default = Template.bind({});
Default.args = {
  onSelect: ()=>{},
    category:"일반"
  };