import axios from "axios";

const endpoints = {
  get_: () => axios.get("/stats"),
  get: () => axios.get("/comment"),
  getOne: (id) =>
    axios.get("/comment", {
      params: {
        id: id,
      },
    }),
  create: (mark, text, email, password) =>
    axios.post(
      "/comment",
      {
        text: text,
        mark: mark,
      },
      {
        auth: {
          username: email,
          password: password,
        },
      }
    ),
  delete: (id, email, password) =>
    axios.delete("/comment", {
      params: {
        id: id,
      },
      auth: {
        username: email,
        password: password,
      },
    }),
};

export default endpoints;
