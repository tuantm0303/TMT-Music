import axiosClient from "./instance";

const menu = "/menus";

export const menuApi = {
  list() {
    return axiosClient.get(menu);
  },
  read(id) {
    return axiosClient.get(`${menu}/${id}`);
  },
  create(data) {
    return axiosClient.post(menu, data);
  },
  update(data) {
    return axiosClient.put(`${menu}/${data._id}`, data);
  },
  remove(id) {
    return axiosClient.delete(`${menu}/${id}`);
  },
};
