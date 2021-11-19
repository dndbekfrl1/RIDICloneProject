import React from "react";
import BookInfoPage from "./BookInfoPage";

export default {
  component: BookInfoPage,
  title: "BookInfoPage",
};

const Template = (args) => <BookInfoPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/WCUj8t3POh.jpg",
  type: "webNovel",
  category: ["sf", "detective"],
  title: "Diabetes",
  author: {
    name: "Reeta Loukes",
    awards: ["Denesik Group", "Leuschke-Herzog"],
    representatives: [
      {
        name: "Food Science",
        thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/tv3SaWs8xJ.jpg",
      },
      {
        name: "VMware",
        thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/d66Ptk6HW8.jpg",
      },
      {
        name: "OmniGraffle",
        thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/KcuAHAFiuY.jpg",
      },
    ],
    introduction:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
  },
  translator: {
    name: "Wat Ebourne",
    nationality: "North Korea",
    career: "Bahringer-Fay",
    representatives: [
      {
        name: "NHS",
        thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg",
      },
    ],
    introduction:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
  },
  publisher: "Kuhic, Huels and Schuppe",
  starRate: { rate: 1.2, rateNum: 71, rateBuyerNum: 17 },
  rentalPrice: 431,
  rentalSalePercent: 35,
  buyPrice: 34885,
  buySalePercent: 32,
  count: 2,
  freeCount: 2,
  isFinished: true,
  canRent: false,
  waitFree: false,
  xRated: false,
  description:
    "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
  index:
    "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  lastlyRead: "2021-01-10",
};
