import React from "react";
import { theme } from "../theme/theme";
import BookInfoDetail from "./BookInfoDetail";

export default {
  component: BookInfoDetail,
  title: "BookInfoDetail",
};

const Template = (args) => <BookInfoDetail {...args} />;

//"저자 프로필"|"저자 소개"|"작품 소개"|"목차",
export const BookIntroduction = Template.bind({});
BookIntroduction.args = {
  label: "작품 소개",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
};

export const BookIndex = Template.bind({});
BookIndex.args = {
  label: "목차",
  description: [
    "Ut at dolor quis odio consequat varius.",
    "Integer ac leo. Pellentesque ultrices mattis odio.",
    "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
  ],
};
