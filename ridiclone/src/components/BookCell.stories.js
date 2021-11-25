import React from "react";
import BookCell from "./BookCell";

export default {
  component: BookCell,
  title: "BookCell",
};

const Template = (args) => <BookCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  book: {
    id: 1,
    thumnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
    type: "webNovel",
    category: ["sf", "detective"],
    title: "Diabetes",
    author: "Reeta Loukes",
    starRate: 4.5,
  },
};
