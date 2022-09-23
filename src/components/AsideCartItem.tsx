import React from "react";
import { GrFormClose as AsideCloseIcon } from "react-icons/gr";
import { shopItemType } from "../../shop";
import { useGlobalContext } from "../../context";

export const AsideCartItem: React.FC<shopItemType> = ({
  id,
  name,
  price,
  img,
  amount,
}) => {
  const { removeFromCartList, formatCurrency } = useGlobalContext();
  return (
    <div className="aside-cart-item">
      <img className="aside-cart-img" src={img} alt="" />
      <div className="aside-cart-info-container">
        <div className="cart-name-and-price-wrapper">
          <span className="aside-cart-name">{name} </span>
          <span className="aside-cart-price">{formatCurrency(price)}</span>
        </div>

        <div className="aside-remove-btn-wrapper">
          <span className="aside-item-price-multiplied">
            {formatCurrency(price * amount)}
          </span>
          <button
            className="aside-remove-item-btn"
            onClick={() => removeFromCartList(id)}
          >
            <AsideCloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AsideCartItem;
