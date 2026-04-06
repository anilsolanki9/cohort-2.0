import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const Products = () => {
  const { allProductsData, loading } = useContext(ProductContext);

  if (loading) return <div className="w-full h-full flex-1 ">Loading....</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
      {allProductsData.map((Product) => {
        return (
          <Link to={`/products/${Product.id}`} className="bg-zinc-500 h-100 p-4  flex flex-col rounded-2xl" key={Product.id}>
            <img className="w-full h-[80%] object-contain" src={Product.image} alt="" />
            <div className="flex-1 flex justify-center flex-col">
              <p className="text-xl font-semibold text-white">
                <span className="text-4xl text-zinc-900">$</span> {Product.price}
              </p>
              <h3 className="font-semibold">{Product.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
