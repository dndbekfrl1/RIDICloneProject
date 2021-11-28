import NotificationCell from "./NotificationCell";
import React from "react";

export default {
  component: NotificationCell,
  title: "NotificationCell",
};

const Template = (args) => <NotificationCell {...args} />;

export const Notice = Template.bind({});
Notice.args = {
  date: "2021-10-07",
  type: "공지",
  content: "Praesent id massa id nisl venenatis lacinia.",
};

export const Event = Template.bind({});
Event.args = {
  date: "2021-10-07",
  type: "이벤트",
  content: "Praesent id massa id nisl venenatis lacinia.",
};
