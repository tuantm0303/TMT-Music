import axiosClient from "./instance";

const songs = "/songs";

export const songsApi = {
  list() {
    return axiosClient.get(songs);
  },
  read(id) {
    return axiosClient.get(`${songs}/${id}`);
  },
  create(data) {
    return axiosClient.post(songs, data);
  },
  update(data) {
    return axiosClient.put(`${songs}/${data._id}`, data);
  },
  remove(id) {
    return axiosClient.delete(`${songs}/${id}`);
  },
};
