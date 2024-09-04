import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface posts {
  id: string;
  img: string;
  title: string;
  price: number;
  amount: number;
}

export const allPosts = createAsyncThunk("posts", async () => {
  const { data } = await axios.get(
    `https://www.course-api.com/react-useReducer-cart-project`
  );

  return data as posts[];
});

interface initial {
  cartItems: posts[];
  isLoading: boolean;
  amount: number;
  total: number;
  isOpened: boolean;
}

const initialState: initial = {
  cartItems: [],
  isLoading: true,
  amount: 0,
  total: 0,
  isOpened: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // API
  extraReducers(builder) {
    builder.addCase(allPosts.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.isLoading = false;
    });

    builder.addCase(allPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(allPosts.rejected, (state) => {
      state.isLoading = true;
    });
  },
  // functions
  reducers: {
    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cart) => cart.id !== action.payload
      );
    },

    increase: (state, action) => {
      const increaseItem = state.cartItems.find(
        (cart) => cart.id === action.payload
      );

      if (increaseItem) increaseItem.amount++;
    },

    decrease: (state, action) => {
      const decreaseItem = state.cartItems.find(
        (cart) => cart.id === action.payload
      );

      if (decreaseItem && decreaseItem.amount > 0) decreaseItem.amount--;
    },

    calcTotal: (state) => {
      let amount: number = 0;
      let total: number = 0;

      state.cartItems.forEach((cart) => {
        amount += cart.amount;
        total += cart.amount * cart.price;
      });

      state.amount = amount;
      state.total = total;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    isOpen: (state) => {
      state.isOpened = true;
    },

    isClose: (state) => {
      state.isOpened = false;
    },
  },
});

export default cartSlice.reducer;

export const {
  removeCart,
  increase,
  decrease,
  calcTotal,
  clearCart,
  isOpen,
  isClose,
} = cartSlice.actions;
