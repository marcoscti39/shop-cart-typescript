import React, { ReactNode, useState } from "react";
import { shopItemType } from "./shop";
import { shop } from "./shop";

const CreateContext = React.createContext<Context | null>(null);

interface Context {
  addCartToList: (item: shopItemType) => void;
  isAsideShowing: boolean;
  setIsAsideShowing: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: shopItemType[];
  removeFromCartList: (
    id: number,
    setAmountCounter?: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  totalPrice: () => string;
  increaseAmount: (
    id: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => void;
  decreaseAmount: (
    id: number,
    currentAmount: number,
    setAmount: React.Dispatch<React.SetStateAction<number>>
  ) => void;

  showCartLength: () => number;
  changeAddedState: (id: number) => void;
  itemsToShop: shopItemType[];
  formatCurrency: (money: number) => string;
}

export const useGlobalContext = () => React.useContext(CreateContext)!;

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAsideShowing, setIsAsideShowing] = React.useState(false);
  const [cartItems, setCartItems] = useState<shopItemType[]>([]);
  const [itemsToShop, setItemsToShop] = useState(shop);
  console.log("oi");

  const removeFromCartList = (
    id: number,
    setAmountCounter?: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const newCartList = cartItems.filter((item) => {
      item.amount = 1;
      if (item.id !== id) {
        return item;
      }
    });
    changeAddedState(id);
    setAmountCounter?.(1);
    setCartItems([...newCartList]);
  };

  const addCartToList = (item: shopItemType) => {
    setCartItems((prev) => [...prev, item]);
  };

  const totalPrice = () => {
    const calcTotalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);

    return formatCurrency(calcTotalPrice);
  };

  const increaseAmount = (
    id: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const newCartList = cartItems.map((item) => {
      if (item.id === id) {
        item.amount++;
      }
      return item;
    });
    setState((prev) => prev + 1);

    setCartItems([...newCartList]);
  };

  const decreaseAmount = (
    id: number,
    currentAmount: number,
    setAmount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (currentAmount === 1) {
      removeFromCartList(id);
      return;
    }

    const newCartList = cartItems.map((item) => {
      if (item.id === id) {
        item.amount--;
      }
      return item;
    });

    setAmount((prev) => prev - 1);
    setCartItems([...newCartList]);
  };

  const showCartLength = () => {
    const cartLength = cartItems.reduce((acc, item) => acc + item.amount, 0);
    return cartLength;
  };

  const changeAddedState = (id: number) => {
    const shopItemRefreshed = shop.map((item) => {
      if (item.id === id) {
        item.isItemAdded
          ? (item.isItemAdded = false)
          : (item.isItemAdded = true);
      }
      return item;
    });

    setItemsToShop([...shopItemRefreshed]);
  };

  const formatCurrency = (money: number) => {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(money);
  };

  return (
    <>
      <CreateContext.Provider
        value={{
          addCartToList,
          isAsideShowing,
          setIsAsideShowing,
          cartItems,
          removeFromCartList,
          totalPrice,
          increaseAmount,
          decreaseAmount,
          showCartLength,
          changeAddedState,
          itemsToShop,
          formatCurrency,
        }}
      >
        {children}
      </CreateContext.Provider>
    </>
  );
};
export default ContextProvider;
