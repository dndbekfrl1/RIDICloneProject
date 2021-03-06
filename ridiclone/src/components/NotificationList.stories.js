import React from "react";
import NotificationList from "./NotificationList";

export default {
  component: NotificationList,
  title: "NotificationList",
};

const Template = (args) => <NotificationList {...args} />;
export const Default = Template.bind({});
Default.args = {
  notifications: [
    {
      date: "2021-10-07",
      type: "공지",
      content: "Praesent id massa id nisl venenatis lacinia.",
    },
    {
      date: "2021-04-30",
      type: "이벤트",
      content: "In sagittis dui vel nisl.",
    },
    {
      date: "2021-10-23",
      type: "이벤트",
      content:
        "Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    },
    {
      date: "2021-10-08",
      type: "공지",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    { date: "2021-04-08", type: "공지", content: "Ut tellus." },
  ],
};
