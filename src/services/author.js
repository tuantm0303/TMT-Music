import axiosClient from "./instance";

const authors = "/authors";

export const authorsApi = {
  list() {
    return axiosClient.get(authors);
  },
  read(id) {
    return axiosClient.get(`${authors}/${id}`);
  },
  create(data) {
    return axiosClient.post(authors, data);
  },
  update(data) {
    return axiosClient.put(`${authors}/${data._id}`, data);
  },
  remove(id) {
    return axiosClient.delete(`${authors}/${id}`);
  },
};
