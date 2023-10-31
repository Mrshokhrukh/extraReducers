import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { closeModal, openModal } from "../redux/modalSlice";

const CartContainer = () => {
  let { cartItems, amount, total } = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(openModal());
  };

  if (amount < 1) {
    return (
      <div className="cart_container">
        <header>
          <h1>your cart is empty</h1>
        </header>
      </div>
    );
  }
  return (
    <div className="cart_container">
      <header>
        <h1>your cart</h1>
      </header>
      <main>
        {cartItems.map((items, i) => {
          return <CartItems key={i} {...items} />;
        })}
      </main>
      <footer>
        <hr />
        <h3>total: ${total.toFixed(2)}</h3>
        <button onClick={handleOpen}>clear cart</button>
        <button>checkout</button>
      </footer>
    </div>
  );
};

export default CartContainer;
