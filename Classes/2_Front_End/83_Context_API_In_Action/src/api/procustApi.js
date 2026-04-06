import axios from "axios";

export const fetchAllProducts = async () => {
  const data = await axios.get("https://fakestoreapi.com/products");
  return data;
};

export const fetchSelectedProduct = async (id) => {
  const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};
