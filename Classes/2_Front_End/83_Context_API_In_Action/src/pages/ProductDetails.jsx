import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { allProductsData, loading } = useContext(ProductContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    let foundProduct = allProductsData.find((p) => p.id === Number(id));
    setProduct(foundProduct);
  }, [id, allProductsData]);

  useEffect(() => {
    if (product) console.log("product", product);
  }, [product]);

  if (loading && !product) return <div className="w-full h-full flex-1 ">Loading....</div>;

  if (product)
    return (
      <div className="p-10 space-y-5">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="px-5 py-2 bg-black text-white rounded-xl text-xl font-bold cursor-pointer active:scale-95"
        >
          Back
        </button>
        <div className="flex h-140 gap-10 text-xl">
          <div className="flex-1 bg-zinc-400 flex items-center justify-center p-5 rounded-2xl  drop-shadow-xl drop-shadow-black">
            <img className="w-full h-full object-contain" src={product.image} alt="" />
          </div>
          <div className="flex-2 bg-zinc-400 flex flex-col justify-evenly p-5 rounded-2xl  drop-shadow-xl drop-shadow-black">
            <h2 className="text-4xl text-black font-semibold">{product.title}</h2>
            <p className="text-xl">
              <span className="text-4xl text-black">$</span> {product.price}
            </p>
            <p className="text-xl text-black font-semibold">{product.description}</p>
            <h4 className="text-black font-bold">Category : {product.category}</h4>
            <p>{product.rating.rate} ⭐</p>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;
