import cartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemFromCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <cartContext.Provider value={cartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
