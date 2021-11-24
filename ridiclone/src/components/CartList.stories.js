import React from "react";
import CartList from "./CartList";
import { theme } from "../theme/theme";

export default {
  component: CartList,
  title: "CartList",
};

const Template = (args) => <CartList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  books: [],
};

export const Cart = Template.bind({});
Cart.args = {
  books: [
    {
      id: 1,
      thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
      type: "webNovel",
      author_name: "Reeta Loukes",
      buyPrice: 34885,
      buySalePercent: 32,
    },
    {
      id: 4,
      thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
      type: "webNovel",
      author_name: "Reeta Loukes",
      buyPrice: 34885,
    },
  ],
};
