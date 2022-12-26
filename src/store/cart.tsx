import { createSlice } from "@reduxjs/toolkit";

const initialCart: {
  cartItems: any[];
  totalPrice: number;
} = {
  cartItems: [],
  totalPrice: 0,
};

function calculateTotalPrice(cartItems: any[]): number {
  return cartItems.reduce((sum, element) => sum + element.price, 0);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart(state, action) {
      //for same product
      let filteredProduct = state.cartItems.filter(
        product => product.id === action.payload.id
      );

      if (filteredProduct.length > 0) {
        for (let product of state.cartItems) {
          if (product.id === action.payload.id) {
            product.quantity++;
            product.price *= product.quantity;
          }
        }
      } else {
        //for new product
        let newProduct = { ...action.payload };
        newProduct.quantity = 1;
        state.cartItems.push(newProduct);
      }

      state.totalPrice = calculateTotalPrice(state.cartItems);
    },

    removeFromCart(state, action) {
      const newCart = state.cartItems.filter(product => {
        return product.id !== action.payload;
      });

      state.cartItems = newCart;
      state.totalPrice = calculateTotalPrice(state.cartItems);
    },
  },
});

const { addToCart, removeFromCart } = cartSlice.actions;

export { addToCart, removeFromCart };

export default cartSlice.reducer;
