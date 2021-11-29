import React from "react";
import EventList from "./EventList";

export default {
  component: EventList,
  title: "EventList",
};

const Template = (args) => <EventList {...args} />;

export const Default = Template.bind({});
Default.args = {};
