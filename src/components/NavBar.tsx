import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const { cartProducts } = useSelector<any, any>(state => state.cart);
  console.log(cartProducts);
  return (
    <div className="flex justify-between h-10 items-center">
      <div>REDUX STORE</div>
      <div className="flex justify-evenly w-[300px]">
        <Link to="/">home</Link>
        <Link to="/cart">cart</Link>
        <p className="font-bold">CART ITEMS : {cartProducts.length}</p>
      </div>
    </div>
  );
}

export default NavBar;
