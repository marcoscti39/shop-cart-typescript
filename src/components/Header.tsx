import "../styles/Header.css";

import { FaShoppingCart as ShopCartIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import AsideCart from "./AsideCart";
import { useGlobalContext } from "../../context";

export default function Header(): React.ReactElement {
  const { setIsAsideShowing, cartItems, showCartLength } = useGlobalContext();

  return (
    <>
      <header className="header">
        <div className="header-container">
          <nav className="header-nav">
            <ul className="header-ul">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/store"}>Store</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <button
                  className="aside-shop-cart-btn"
                  onClick={() => setIsAsideShowing(true)}
                >
                  <ShopCartIcon />
                  <div className="cart-item-counter">{showCartLength()}</div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <AsideCart />
    </>
  );
}
