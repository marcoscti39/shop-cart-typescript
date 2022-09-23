export interface shopItemType {
  id: number;
  name: string;
  amount: number;
  price: number;
  img: string;
  isItemAdded: boolean;
}

import computerPhoto from "./public/images/computer.jpg";
import carPhoto from "./public/images/car.jpg";
import bananaPhoto from "./public/images/banana.jpg";
import bookPhoto from "./public/images/book.jpg";

//
export const shop: shopItemType[] = [
  {
    id: 1,
    name: "Car",
    amount: 1,
    img: carPhoto,
    price: 14000,
    isItemAdded: false,
  },
  {
    id: 2,
    name: "Book",
    amount: 1,
    img: bookPhoto,
    price: 10.99,
    isItemAdded: false,
  },
  {
    id: 3,
    name: "Computer",
    amount: 1,
    img: computerPhoto,
    price: 1199,
    isItemAdded: false,
  },
  {
    id: 4,
    name: "Banana",
    amount: 1,
    img: bananaPhoto,
    price: 1.05,
    isItemAdded: false,
  },
];
