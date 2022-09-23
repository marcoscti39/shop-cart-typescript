import React from "react";
import { GrFormClose as AsideCloseIcon } from "react-icons/gr";
import { useGlobalContext } from "../../context";
import AsideCartItem from "./AsideCartItem";

export default function AsideCart() {
  const { isAsideShowing, setIsAsideShowing } = useGlobalContext();
  const { cartItems, totalPrice } = useGlobalContext();

  return (
    <aside className={`aside-bar-cart ${isAsideShowing && "show"}`}>
      <h2 className="aside-title">Cart</h2>
      <button
        className="aside-close-btn"
        onClick={() => setIsAsideShowing((prev) => !prev)}
      >
        <AsideCloseIcon />
      </button>

      <div className="aside-cart-items-container">
        {cartItems.map((item, index) => (
          <AsideCartItem key={index} {...item} />
        ))}
      </div>

      {cartItems.length === 0 && <p>Empty Cart :(</p>}

      <div className="aside-total-price">Total: {totalPrice()}</div>
    </aside>
  );
}
