import React from "react";
import { ProductType } from "../store/product";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
interface ProductPropstype extends ProductType {}

function Product(product: ProductPropstype) {
  const { category, description, id, price, rating, title, image } = product;
  const dispatch = useDispatch();

  const addToCartHandler = (product: any) => {
    dispatch(addToCart(product));
  };
  return (
    <div
      className="flex flex-col justify-evenly items-center bg-white rounded h-[250px]"
      key={id}
    >
      <img className="h-fit w-9 object-cover" src={image} />
      <p className="text-center font-bold">{title}</p>
      <p className="text-center font-bold"> {price}</p>
      <button
        className="bg-violet-600 font-bold text-white rounded p-1"
        onClick={() => {
          addToCartHandler(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
