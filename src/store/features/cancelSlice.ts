import { createSlice } from "@reduxjs/toolkit";

interface initial {
  isOpen: boolean;
}

const initialState: initial = {
  isOpen: false,
};

const cancelSlice = createSlice({
  name: "cancel",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },

    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export default cancelSlice.reducer;

export const { openModal, closeModal } = cancelSlice.actions;
