export interface Data {
  id: number;
  title: string;
  fullname: string;
  date: string;
  price: string;
  imageFirst: string;
  imageSecond: string;
}

export const data: Data[] = [
  {
    id: 1,
    title: "Cute Cube Cool",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s	",
    imageFirst: require("../../public/orderFirst.png"),
    imageSecond: require("../../public/order.svg"),
  },
  {
    id: 2,
    title: "Cute Cube Cool",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s	",
    imageFirst: require("../../public/orderFirst.png"),
    imageSecond: require("../../public/order.svg"),
  },
  {
    id: 3,
    title: "Liquid Wave",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s	",
    imageFirst: require("../../public/orderSecond.png"),
    imageSecond: require("../../public/order.svg"),
  },
  {
    id: 4,
    title: "Cute Cube Cool",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s	",
    imageFirst: require("../../public/orderFirst.png"),
    imageSecond: require("../../public/order.svg"),
  },
  {
    id: 5,
    title: "Cute Cube Cool",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s	",
    imageFirst: require("../../public/orderFirst.png"),
    imageSecond: require("../../public/order.svg"),
  },
  {
    id: 6,
    title: "Liquid Wave",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s	",
    imageFirst: require("../../public/orderThird.png"),
    imageSecond: require("../../public/order.svg"),
  },
  {
    id: 7,
    title: "Liquid Wave",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s	",
    imageFirst: require("../../public/orderFour.png"),
    imageSecond: require("../../public/order.svg"),
  },
];
