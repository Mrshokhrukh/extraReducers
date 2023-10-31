import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeProduct } from "../redux/fooSlice";

const CartItems = ({ id, img, title, price, amount }) => {
  let dispatch = useDispatch();
  return (
    <div className="cart_item">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h4>${price}</h4>
      <div className="quant">
        <h4>{amount}</h4>
        <button onClick={() => dispatch(increaseQty(id))}>+</button>
        <button onClick={() => dispatch(decreaseQty(id))}>-</button>
      </div>
      <button className="remove" onClick={() => dispatch(removeProduct(id))}>
        remove
      </button>
    </div>
  );
};

export default CartItems;
