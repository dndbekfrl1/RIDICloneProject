import React from "react";
import SquareButton from "./SquareButton";
import Heart from "../assets/icon/Heart";
import { theme } from "../theme/theme";

export default {
  component: SquareButton,
  title: "SquareButton",
};

const Template = (args) => <SquareButton {...args} />;

export const LikeButton = Template.bind({});
LikeButton.args = {
  icon: "heart",
};

export const CartButton = Template.bind({});
CartButton.args = {
  icon: "cart",
};
