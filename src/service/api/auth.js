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
};

export default endpoints;
