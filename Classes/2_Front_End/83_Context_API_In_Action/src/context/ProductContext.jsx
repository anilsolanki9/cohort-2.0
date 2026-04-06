import { createContext, useEffect, useState } from "react";
import { fetchAllProducts } from "../api/procustApi";

const ProductContext = createContext();

export default ProductContext;

export const ProductsContextProvider = (props) => {
  const [allProductsData, setAllProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
      try {
        const { data } = await fetchAllProducts();
        setAllProductsData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    setData();
  }, []);

  return <ProductContext.Provider value={{ allProductsData, loading }}>{props.children}</ProductContext.Provider>;
};
