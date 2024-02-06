import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartList",
  initialState: [],

  reducers: {
    //This function will add Product to Cart
    addCart: (state, action) => {
      const newCart = {
        cartId: Date.now(),
        prodId: action.payload.id,
        prodTitle: action.payload.title,
        prodLoc: action.payload.picLoc,
        prodColor: action.payload.pickColour,
        prodPrice: action.payload.price,
      };
      state.push(newCart);
    },
  },
});

// Export the action functions to be used in components
export const { addCart } = cartSlice.actions;

//Export the reducer function to be used in the store
export default cartSlice.reducer;
