import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  console.log("navbar");
  const { cartItems } = useSelector<any, any>(state => state.cart);

  return (
    <div className="flex bg-slate-200 top-0 left-0 right-0 fixed justify-between h-10 items-center p-2">
      <div>REDUX STORE</div>
      <div className="flex justify-evenly w-[300px]">
        <Link to="/ecommerce-cart-deploy">Home</Link>
        <Link to="/ecommerce-cart-deploy/cart">Cart</Link>
        <p className="font-bold">CART ITEMS : {cartItems.length}</p>
      </div>
    </div>
  );
}

export default NavBar;
