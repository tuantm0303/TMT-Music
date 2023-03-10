import axiosClient from "./instance";

const categories = "/categories";

export const categoriesApi = {
  list() {
    return axiosClient.get(categories);
  },
  read(id) {
    return axiosClient.get(`${categories}/${id}`);
  },
  create(data) {
    return axiosClient.post(`${categories}`, data);
  },
  update(data) {
    return axiosClient.put(`${categories}/${data._id}`, data);
  },
  remove(id) {
    return axiosClient.delete(`${categories}/${id}`);
  },
};
