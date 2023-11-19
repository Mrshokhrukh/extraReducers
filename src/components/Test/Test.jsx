import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  fetchCart,
  removeItemFromCart,
} from "../../redux/testSlice";
const Test = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.testCart);

  useEffect(() => {
    dispatch(fetchCart());
    console.log(cart.items);
  }, [dispatch]);

  const handleAddItem = (id) => {
    // console.log(item);
    dispatch(addItemToCart(id));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };
  const handleInc = (itemId) => {
    
  };
  const handleDec = (itemId) => {
    
  };

  //   if (cart.status === "loading") {
  //     return <p>Loading...</p>;
  //   }

  //   if (cart.status === "failed") {
  //     return <p>Error: {cart.error}</p>;
  //   }
  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>
        {cart.items?.map((item, i) => (
          <li key={i}>
            <span>{item.product.id}</span>
            {item.name} -{" "}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleInc(item.id)}>+</button>
            <button onClick={() => handleDec(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          handleAddItem({ id: Math.floor(Math.random() * 10) + 1 })
        }
      >
        Add Product 1 to Cart
      </button>
    </div>
  );
};

export default Test;
