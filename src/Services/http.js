import Axios from "axios";

const base_url = "https://fakestoreapi.com";

export const cancelOperation = Axios.CancelToken.source();
export const http = {
  get: async (url) =>
    await Axios.get(`${base_url}/${url}`)
      .then((resp) => resp.data)
      .catch((err) => {
        throw Error(err);
      }),
  post: async (params) =>
    await Axios.post(`${base_url}`, params)
      .then((resp) => resp)
      .catch((err) => {
        throw Error(err);
      }),
};

export const fetchToken = {
  login: async (username, password) =>
    await Axios.post("http://localhost:3001/login", { username, password }),
};

export const fetchUser = async (token) =>
  await Axios.get("http://localhost:3001/users/me", {
    headers: {
      authorization: token,
    },
  });
