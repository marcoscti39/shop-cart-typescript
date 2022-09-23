import React from "react";
import { ShopCartItem } from "./ShopItem";
import "../styles/Store.css";
import Header from "./Header";
import { shop } from "../../shop.js";
import { useGlobalContext } from "../../context";
export default function Store() {
  const { itemsToShop } = useGlobalContext();
  return (
    <>
      <Header />
      <section className="store-section">
        {itemsToShop.map((item, index) => (
          <ShopCartItem key={index} {...item} wholeItem={item} />
        ))}
      </section>
    </>
  );
}
