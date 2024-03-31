import axiosClient from "./axiosClient";

const addToCart = (payload) => {
  return axiosClient.post("/carts", payload);
};

const getUserCartItem = (email) => {
  return axiosClient.get(
    `/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );
};

const deletCartItem =(id)=>{
  return axiosClient.delete(`carts/${id}`)
}

export default {
  addToCart,
  getUserCartItem,
  deletCartItem,
};
