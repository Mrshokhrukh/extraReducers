import { useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import { clearCart } from "../redux/fooSlice";

const Modal = () => {
  let dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <h2>do you want to clear ?</h2>
      <div>
        <button onClick={handleClear}>confirm</button>
        <button onClick={() => dispatch(closeModal())}>cancel</button>
      </div>
    </div>
  );
};

export default Modal;
