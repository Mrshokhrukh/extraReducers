import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../api";
import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkApi) => {
    try {
      // console.log(thunkApi.dispatch(openModal()));
      let resp = await axios(baseUrl);
      return resp.data;
    } catch (err) {
      return thunkApi.rejectWithValue("the error has been accured !");
    }
  }
);
const { pending, fulfilled, rejected } = getCartItems;

export const fooSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increaseQty: (state, action) => {
      let product = state.cartItems.find((item) => item.id == action.payload);
      product.amount += 1;
    },
    decreaseQty: (state, action) => {
      let product = state.cartItems.find((item) => item.id == action.payload);
      if (product.amount > 1) {
        product.amount -= 1;
      }
    },
    removeProduct: (state, action) => {
      let newArr = state.cartItems.filter((item) => item.id !== action.payload);
      state.cartItems = newArr;
    },
    calculate: (state) => {
      let total = 0;
      state.cartItems.forEach((items) => {
        total += items.price * items.amount;
      });
      state.amount = state.cartItems.length;
      state.total = total;
    },
  },
  extraReducers: {
    [pending]: (state) => {
      state.isLoading = true;
    },
    [fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  clearCart,
  addProduct,
  removeProduct,
  increaseQty,
  decreaseQty,
  calculate,
} = fooSlice.actions;

export default fooSlice.reducer;
