import Axios from "axios";

const base_url = "https://fakestoreapi.com";
export const cancelOperation = Axios.CancelToken.source();
export const http = {
  get: async (url) =>
    await Axios.get(`${base_url}/${url}`)
      .then((resp) => resp.data)
      .catch((err) => {
        throw err;
      }),
  post: async (params) =>
    await Axios.post(`${base_url}`, params)
      .then((resp) => resp)
      .catch((err) => {
        throw err;
      }),
};
