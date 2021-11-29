import React from "react";
import Book from "./Book";
import { theme } from "../theme/theme";

export default {
  component: Book,
  title: "Book",
};

const Template = (args) => <Book {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
  type: "webNovel",
  category: ["sf", "detective"],
  title: "Diabetes",
  author: "Reeta Loukes",
  starRate: 4.5,
};

export const Rent = Template.bind({});
Rent.args = {
  canRent: true,
  id: "1",
  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
  type: "webNovel",
  category: ["sf", "detective"],
  title: "Diabetes",
  author: "Reeta Loukes",
  starRate: 4.5,
};

export const Discount = Template.bind({});
Discount.args = {
  buySalePercent: 41,
  id: "1",
  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
  type: "webNovel",
  category: ["sf", "detective"],
  title: "Diabetes",
  author: "Reeta Loukes",
  starRate: 4.5,
};
