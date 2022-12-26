import { createSlice } from "@reduxjs/toolkit";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

enum STATUS {
  LOADING = "laoding",
  ERROR = "error",
  SUCCESS = "Success",
}

function convertPriceToRoundvalue(products: any[]) {
  products.forEach((product: ProductType) => {
    product.price = Math.round(product.price);
  });
}

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUS.LOADING,
  },
  reducers: {
    saveProducts(state, action) {
      convertPriceToRoundvalue(action.payload);
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

let { saveProducts, setStatus } = productSlice.actions;

function getProducts() {
  return async function (dispatch: any, getState: any) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(setStatus(STATUS.SUCCESS));
      dispatch(saveProducts(data));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}

export { saveProducts, setStatus, getProducts, STATUS };
export type { ProductType };

export default productSlice.reducer;
