import React, { useState } from "react";
import { shopItemType } from "../../shop";
import "../styles/ShopCartItem.css";

import { useGlobalContext } from "../../context";

export const ShopCartItem: React.FC<
  shopItemType & { wholeItem: shopItemType }
> = ({ id, name, price, img, wholeItem, isItemAdded }) => {
  // const [isItemAdded, setIsItemAdded] = useState(false);
  const [amountCounter, setAmountCounter] = useState(1);
  const {
    addCartToList,
    removeFromCartList,
    increaseAmount,
    decreaseAmount,
    changeAddedState,
    formatCurrency,
  } = useGlobalContext();

  React.useEffect(() => {
    if (isItemAdded) {
      addCartToList(wholeItem);
    }
  }, [isItemAdded]);

  return (
    <article className="cart">
      <div className="cart-img-container">
        <img className="cart-img" src={img} alt="" />
      </div>

      <div className="cart-description">
        <div className="cart-name-wrapper">
          <strong className="cart-name">{name}</strong>
          <strong className="cart-price">{formatCurrency(price)}</strong>
        </div>

        <button
          className={`cart-add-btn ${isItemAdded ? "" : "show-cart-add-btn"}`}
          onClick={() => changeAddedState(id)}
        >
          Add to Cart
        </button>

        <div
          className={`cart-amount-wrapper ${isItemAdded && "show-cart-amount"}`}
        >
          <div>
            <button
              className="cart-amount-btn"
              onClick={() =>
                decreaseAmount(id, amountCounter, setAmountCounter)
              }
            >
              -
            </button>
            <strong className="cart-amount">{amountCounter}</strong>
            in cart
            <button
              className="cart-amount-btn"
              onClick={() => increaseAmount(id, setAmountCounter)}
            >
              +
            </button>
          </div>
          <button
            className="cart-remove-btn"
            onClick={() => removeFromCartList(id, setAmountCounter)}
          >
            remove
          </button>
        </div>
      </div>
    </article>
  );
};
