import React from "react";
import BookDetailPage from "./BookDetailPage";

export default {
  component: BookDetailPage,
  title: "BookDetailPage",
};

const Template = (args) => <BookDetailPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  match: {
    params: { id: "3" },
  },
};
