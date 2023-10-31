import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./CartContainer.jsx";
import { useEffect } from "react";
import { calculate, getCartItems } from "../redux/fooSlice.js";
import Modal from "./Modal.jsx";

const Data = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.cart);
  let { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(calculate());
  }, [data]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  if (data.isLoading) {
    return (
      <div className="dataUser">
        <h2 style={{ marginTop: "250px" }}>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="dataUser">
      {isOpen && <Modal />}
      <h2>
        Redux Toolkit Api Cart!{" "}
        <span style={{ color: "dodgerblue" }}>items: {data.amount} </span>
      </h2>
      <div style={{ marginLeft: "20px" }}>
        <p>1 redux toolkit</p>
        <p>2 redux thunk</p>
        <p>3 extraReducers</p>
        <p>4 api requests - asyncThunk</p>
      </div>
      <CartContainer />
    </div>
  );
};

export default Data;
