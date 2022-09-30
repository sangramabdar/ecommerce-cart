import React from "react";
import Products from "../components/Products";

function HomePage() {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-lg mb-5">
        Welcome to the Redux toolkit store
      </h1>
      <Products />
    </div>
  );
}

export default HomePage;
