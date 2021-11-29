import React from "react";
import BookCell from "./BookCell";

export default {
  component: BookCell,
  title: "BookCell",
};

const Template = (args) => <BookCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "normal",
  book: {
    id: 3,
    thumbnail: "https://i.esdrop.com/d/1o9bbwj5cf0u/y399yNNuix.jpg",
    type: "novel",
    category: ["sf"],
    title: "EOU",
    author: {
      name: "Ignatius Scragg",
      awards: ["Effertz Inc"],
      representatives: [
        "UMA",
        "MTT",
        "VLSI",
        "Vector NTI",
        "Basic HTML",
        "jQuery",
      ],
      representativesThumbnail:
        "https://i.esdrop.com/d/1o9bbwj5cf0u/ka05O6TWHq.jpg",
      introduction:
        "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
    translator: {
      name: "Wendell Brixey",
      nationality: "North Korea",
      career: "Franecki-Cartwright",
      representatives: [
        "Ethical Decision Making",
        "Islamic Finance",
        "Keyshot",
        "SRED",
      ],
      representativesThumbnail:
        "https://i.esdrop.com/d/1o9bbwj5cf0u/QxDii3ix8F.jpg",
      introduction:
        "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    },
    publisher: "Rohan Inc",
    starRate: { rate: 1.3, rateNum: 31, rateBuyerNum: 14 },
    rentalPrice: 796,
    rentalSalePercent: 10,
    buyPrice: 20808,
    buySalePercent: 18,
    count: 13,
    freeCount: 8,
    isFinished: true,
    canRent: false,
    waitFree: false,
    xRated: true,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    index: "Mauris ullamcorper purus sit amet nulla.",
    lastlyRead: "2021-02-25",
  },
};

export const FullInfo = Template.bind({});
FullInfo.args = {
  type: "full",
  book: {
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
  },
};
