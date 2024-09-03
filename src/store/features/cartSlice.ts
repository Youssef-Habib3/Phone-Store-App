import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface posts {
  id: string;
  title: string;
  price: number;
  amount: number;
  img: string;
}

export const allPosts = createAsyncThunk("posts", async () => {
  const response = await axios.get(
    `https://www.course-api.com/react-useReducer-cart-project`
  );

  return response.data as posts[];
});

interface initial {
  cartItems: posts[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: initial = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeCart: (state, action: PayloadAction<string>) => {
      const itemId: string = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, action: PayloadAction<string>) => {
      const increaseItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (increaseItem) increaseItem.amount += 1;
    },

    decrease: (state, action: PayloadAction<string>) => {
      const decreaseItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (decreaseItem && decreaseItem.amount > 0) decreaseItem.amount -= 1;
    },

    calcTotal: (state) => {
      let amount: number = 0;
      let total: number = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(allPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      allPosts.fulfilled,
      (state, action: PayloadAction<posts[]>) => {
        state.cartItems = action.payload;
        state.isLoading = false;
      }
    );

    builder.addCase(allPosts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default cartSlice.reducer;

export const { clearCart, removeCart, increase, decrease, calcTotal } =
  cartSlice.actions;
