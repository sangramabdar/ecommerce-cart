import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, ProductType, STATUS } from "../store/product";
import Product from "./Product";

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector<
    any,
    {
      data: ProductType[];
      status: STATUS;
    }
  >(state => state.products);

  useEffect(() => {
    dispatch<any>(getProducts());
  }, []);

  if (status === STATUS.LOADING) {
    return <div>Loading....</div>;
  }

  if (status === STATUS.ERROR) {
    return <div>something went wrong</div>;
  }

  return (
    <div className="">
      <h1 className="font-bold mb-5">Products</h1>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {products.map(product => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}

export default Products;
