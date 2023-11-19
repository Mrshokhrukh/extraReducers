import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let api = `https://oqtepalavash-api.khasanjon.me/api/`;

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get(`${api}product/basket/`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwOTQyMzI1LCJpYXQiOjE3MDAzMzc1MjUsImp0aSI6IjMxYzBjOWVjNzg0MDRlMTRiM2YxNDE0MGY4OTQwM2M0IiwidXNlcl9pZCI6MTR9.oiBoy0UCcdmzoBJ3aNwQFv6daimzjQJ2BGRKPhhGRLY`,
    },
  });
  return response.data;
});

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async ({ id }) => {
    const response = await axios.get(`${api}product/${id}/basket/`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwOTQyMzI1LCJpYXQiOjE3MDAzMzc1MjUsImp0aSI6IjMxYzBjOWVjNzg0MDRlMTRiM2YxNDE0MGY4OTQwM2M0IiwidXNlcl9pZCI6MTR9.oiBoy0UCcdmzoBJ3aNwQFv6daimzjQJ2BGRKPhhGRLY`,
      },
    });
    return response.data;
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async (itemId) => {
    await axios.delete(`${api}product/${itemId}/remove-basket/`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwOTQyMzI1LCJpYXQiOjE3MDAzMzc1MjUsImp0aSI6IjMxYzBjOWVjNzg0MDRlMTRiM2YxNDE0MGY4OTQwM2M0IiwidXNlcl9pZCI6MTR9.oiBoy0UCcdmzoBJ3aNwQFv6daimzjQJ2BGRKPhhGRLY`,
      },
    });
    return itemId;
  }
);

const testSlice = createSlice({
  name: "cart",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.push(action.payload);
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeItemFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default testSlice.reducer;
