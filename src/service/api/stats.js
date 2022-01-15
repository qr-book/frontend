import axios from "axios";

const endpoints = {
  get_: () => axios.get("/stats"),
  get: () => axios.get("/comment"),
  delete: (id) =>
    axios.delete("/comment", {
      params: {
        id: id,
      },
    }),
};

export default endpoints;
