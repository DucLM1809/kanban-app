import axiosClient from "./axiosClient";

const boardApi = {
  create: () => axiosClient.post("boards"),
  getAll: () => axiosClient.get("boards"),
  updatePosition: (params) => axiosClient.put("boards", params),
  getOne: (id) => axiosClient.get(`boards/${id}`),
};

export default boardApi;
