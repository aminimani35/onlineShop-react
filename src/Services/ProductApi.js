import { http } from "./http";
const productListUrl = "products";

export const getProducts = () => http.get(productListUrl);

export const getSingleProducts = async (params = null) =>
  await http.get(`${productListUrl}/${params ? params : ""}`);

export const addProduct = (params) =>
  http.post(productListUrl, params);
