import React from "react";
import AuthorProfile from "./AuthorProfile";

export default {
  component: AuthorProfile,
  title: "AuthorProfile",
};

const Template = (args) => <AuthorProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
  type: "ebook",
  category: ["history", "thriller"],
  title: "Avid Newscutter",
  author: {
    name: "Quent Stopp",
    awards: ["Wilkinson-Jenkins", "asjdfadsjkf"],
    representatives: ["3D Modeling", "UHV", "HSS", "Consumer Electronics"],
    representativesThumbnail:
      "https://i.esdrop.com/d/1o9bbwj5cf0u/aXHBuGzIWR.jpg",
    introduction:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  },
  translator: {
    name: "Calv Bruckman",
    nationality: "North Korea",
    career: "Rath LLC",
    representatives: [
      "Estate Administration",
      "SolidWorks",
      "GT-Power",
      "ABAP",
    ],
    representativesThumbnail:
      "https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg",
    introduction:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
  },
  publisher: "Lind Inc",
  starRate: { rate: 3.1, rateNum: 66, rateBuyerNum: 14 },
  rentalPrice: 1390,
  rentalSalePercent: 44,
  buyPrice: 29424,
  buySalePercent: 16,
  count: 26,
  freeCount: 7,
  isFinished: false,
  canRent: false,
  waitFree: true,
  xRated: false,
  description:
    "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
  index:
    "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
  lastlyRead: "2021-02-02",
};
