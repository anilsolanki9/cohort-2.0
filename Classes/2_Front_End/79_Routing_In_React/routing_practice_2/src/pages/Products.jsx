import React from "react";
import { Link, Outlet } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";

const Products = () => {
  return (
    <div className="bg-black/80 text-white/80 min-h-[calc(100vh-60px)] flex justify-center items-center text-7xl">
      <div>
        <h2>Products</h2>
        <ul className="text-xl text-center mt-5">
          <li>
            <Link to="/products/mens">Mens Product's</Link>
          </li>
          <li>
            <Link to="/products/womens">Womens Product's</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
