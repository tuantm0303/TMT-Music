import axiosClient from "./instance";

const singers = "/singers";

export const singersApi = {
  list() {
    return axiosClient.get(singers);
  },
  read(id) {
    return axiosClient.get(`${singers}/${id}`);
  },
  create(data) {
    return axiosClient.post(singers, data);
  },
  update(data) {
    return axiosClient.put(`${singers}/${data._id}`, data);
  },
  remove(id) {
    return axiosClient.delete(`${singers}/${id}`);
  },
};
