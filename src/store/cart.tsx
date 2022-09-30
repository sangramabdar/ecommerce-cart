import { createSlice } from "@reduxjs/toolkit";

const initialCart: {
  cartProducts: any[];
} = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart(state, action) {
      //for same product
      let filteredProduct = state.cartProducts.filter(
        product => product.id === action.payload.id
      );

      if (filteredProduct.length > 0) {
        for (let product of state.cartProducts) {
          if (product.id === action.payload.id) {
            product.count++;
            return;
          }
        }
      }

      //for new product
      let newProduct = { ...action.payload };

      newProduct.count = 1;
      state.cartProducts.push(newProduct);
    },

    removeFromCart(state, action) {
      const newCart = state.cartProducts.filter(product => {
        return product.id !== action.payload;
      });

      state.cartProducts = newCart;
    },
  },
});

const { addToCart, removeFromCart } = cartSlice.actions;

export { addToCart, removeFromCart };

export default cartSlice.reducer;
