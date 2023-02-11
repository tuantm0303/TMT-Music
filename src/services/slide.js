import axiosClient from "./instance";

const slides = "/slides";

export const slidesApi = {
  list() {
    return axiosClient.get(slides);
  },
  read(id) {
    return axiosClient.get(`${slides}/${id}`);
  },
  create(data) {
    return axiosClient.post(slides, data);
  },
  update(data) {
    return axiosClient.put(`${slides}/${data._id}`, data);
  },
  remove(id) {
    return axiosClient.delete(`${slides}/${id}`);
  },
};
