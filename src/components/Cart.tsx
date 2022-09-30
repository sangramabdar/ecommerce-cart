import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart";
import { ProductType } from "../store/product";

interface CartProductPropsType extends ProductType {
  count: number;
}

function CartProduct(product: CartProductPropsType) {
  const { id, image, title, price, count } = product;
  const dispatch = useDispatch();
  const removeProductFromHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      className="bg-white flex justify-between
     p-2 items-center rounded-md h-fit
      "
    >
      <div className="w-10">
        <img className="h-fit w-12 object-cover" src={image} alt="" />
      </div>

      <p className="text-center ">{count}</p>
      <p className="text-center w-44">{title}</p>
      <p className="text-center">{price}</p>
      <button
        className="text-center p-1 rounded bg-violet-600 text-white "
        onClick={() => {
          removeProductFromHandler(id);
        }}
      >
        remove
      </button>
    </div>
  );
}

function Cart() {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector<
    any,
    {
      cartProducts: CartProductPropsType[];
    }
  >(state => state.cart);
  console.log(cartProducts);
  const removeHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex flex-col gap-5">
      {cartProducts.map(product => {
        return <CartProduct key={product.id} {...product} />;
      })}
    </div>
  );
}

export default Cart;
