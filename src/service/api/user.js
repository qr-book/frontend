import axios from "axios";
import https from "https";

const endpoints = {
  login: (email, password) =>
    axios.get(
      "/user",
      {
        auth: {
          username: email,
          password: password,
        },
      },
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    ),
  registation: (email, password) =>
    axios.post("/user", {
      email: email,
      password: password,
      name: email.split("@")[0],
    }),
  edit: (email, nickname, image, lastEmail, password) => {
    axios.put(
      "/user",
      {
        email: email,
        name: nickname,
      },
      {
        auth: {
          username: lastEmail,
          password: password,
        },
      },
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
    if (!image) return;
    let bodyFormData = new FormData();
    bodyFormData.append("image", image);
    return axios.post(
      "/image",
      bodyFormData,
      {
        auth: {
          username: lastEmail,
          password: password,
        },
      },
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
  },
};

export default endpoints;
