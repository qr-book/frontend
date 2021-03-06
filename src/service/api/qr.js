import axios from "axios";
import https from "https";

const endpoints = {
  get: (email, password, order) =>
    axios.get("/qr", {
      auth: {
        username: email,
        password: password,
      },
      params: {
        order: order,
      },
    }),
  getOne: (id, email, password) =>
    axios.get("/qr", {
      auth: {
        username: email,
        password: password,
      },
      params: {
        id: id,
      },
    }),
  create: (
    email,
    password,
    title,
    text,
    fgColor,
    bgColor,
    isURL,
    frameType,
    frameText,
    frameBgColor,
    frameTextColor,
    quality
  ) =>
    axios.post(
      "/qr",
      {
        title: title,
        text: text,
        light_color: bgColor,
        dark_color: fgColor,
        isURL: isURL,
        frame_id: frameType,
        frame_text: frameText,
        frame_color: frameBgColor,
        frame_text_color: frameTextColor,
        quality: quality,
      },
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
  edit: (
    id,
    email,
    password,
    title,
    text,
    fgColor,
    bgColor,
    isURL,
    frameType,
    frameText,
    frameBgColor,
    frameTextColor,
    quality
  ) =>
    axios.put(
      "/qr",
      {
        title: title,
        text: text,
        light_color: bgColor,
        dark_color: fgColor,
        isURL: isURL,
        frame_id: frameType,
        frame_text: frameText,
        frame_color: frameBgColor,
        frame_text_color: frameTextColor,
        quality: quality,
      },
      {
        auth: {
          username: email,
          password: password,
        },
        params: {
          id: id,
        },
      },
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    ),
  delete: (id, email, password) =>
    axios.delete(
      "/qr",
      {
        auth: {
          username: email,
          password: password,
        },
        params: {
          id: id,
        },
      },
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    ),
};

export default endpoints;
