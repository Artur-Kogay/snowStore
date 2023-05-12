export interface Data {
  id: number;
  htmlFor: string;
  checked: boolean;
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
    htmlFor: "first",
    checked: false,
    title: "Cute Cube Cool",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s",
    imageFirst: require("../../public/orderFirst.png"),
    imageSecond: require("../../public/orderAvatar.svg"),
  },
  {
    id: 2,
    htmlFor: "second",
    checked: false,
    title: "Cute Cube Cool",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s",
    imageFirst: require("../../public/orderFirst.png"),
    imageSecond: require("../../public/orderAvatar.svg"),
  },
  {
    id: 3,
    htmlFor: "third",
    checked: false,
    title: "Liquid Wave",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s",
    imageFirst: require("../../public/orderSecond.png"),
    imageSecond: require("../../public/orderAvatar.svg"),
  },
  {
    id: 4,
    htmlFor: "fourth",
    checked: false,
    title: "Cute Cube Cool",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s",
    imageFirst: require("../../public/orderFirst.png"),
    imageSecond: require("../../public/orderAvatar.svg"),
  },
  {
    id: 5,
    htmlFor: "fifth",
    checked: false,
    title: "Cute Cube Cool",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s",
    imageFirst: require("../../public/orderFirst.png"),
    imageSecond: require("../../public/orderAvatar.svg"),
  },
  {
    id: 6,
    htmlFor: "sixth",
    checked: false,
    title: "Liquid Wave",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s",
    imageFirst: require("../../public/orderThird.png"),
    imageSecond: require("../../public/orderAvatar.svg"),
  },
  {
    id: 7,
    htmlFor: "seventh",
    checked: false,
    title: "Liquid Wave",
    fullname: "John Abraham",
    price: "0.0025 ETH",
    date: "2 Hours 1 min 30s",
    imageFirst: require("../../public/orderFour.png"),
    imageSecond: require("../../public/orderAvatar.svg"),
  },
];
