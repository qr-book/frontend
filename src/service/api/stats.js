import axios from "axios";

const endpoints = {
  get_: () => axios.get("/stats"),
  get: () => axios.get("/comment"),
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
  delete: (id) =>
    axios.delete("/comment", {
      params: {
        id: id,
      },
    }),
};

export default endpoints;
