import React from "react";
import Button from "./Button";
import { theme } from "../theme/theme";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  label: "버튼",
  btn_color: "white",
};
