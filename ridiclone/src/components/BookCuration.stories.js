import React from "react";
import BookCuration from "./BookCuration";
import { theme } from "../theme/theme";

export default {
  component: BookCuration,
  title: "BookCuration",
};

const Template = (args) => <BookCuration {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: "오늘, 리디의 발견",
  books: [
    {
      id: 1,
      title: "Diabetes",
      author: "Loukes",
      thumnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
      rating: "3",
    },
    {
      id: 1,
      title: "Diabetes",
      author: "Loukes",
      thumnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
      rating: "3",
      canRent: true,
    },
    {
      id: 1,
      title: "Diabetes",
      author: "Loukes",
      thumnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
      rating: "3",
    },
    {
      id: 1,
      title: "Diabetes",
      author: "Loukes",
      thumnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
      rating: "3",
      canRent: true,
    },
    {
      id: 1,
      title: "Diabetes",
      author: "Loukes",
      thumnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
      rating: "3",
      canRent: true,
    },
  ],
};
