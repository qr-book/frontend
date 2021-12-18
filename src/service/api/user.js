import axios from "axios";
import https from "https";

const endpoints = {
  login: (email, password) =>
    axios.get(
      "https:localhost/user",
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
    axios.post("https:localhost/user", {
      email: email,
      password: password,
      name: email.split("@")[0],
    }),
  edit: (email, nickname, image, lastEmail, password) => {
    axios.put(
      "https:localhost/user",
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
      "https:localhost/image",
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
