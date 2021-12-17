import React from "react";

import QRCode from "qrcode.react";
import html2canvas from "html2canvas";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { qrCreate } from "../service/validator";
import api from "../service/api";

import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/user";

import { frame1, frame2, frame3, frame4 } from "../assets/img/frames";
import { ColorPicker } from "../components";

function Create() {
  const [title, setTitle] = React.useState();
  const [text, setText] = React.useState();
  const [fgColor, setfgColor] = React.useState("#000000");
  const [bgColor, setbgColor] = React.useState("#ffffff");
  const [frameText, setFrameText] = React.useState("");
  const [frameBgColor, setFrameBgColor] = React.useState("#000000");
  const [frameTextColor, setFrameTextColor] = React.useState("#ffffff");
  const [frameType, setFrameType] = React.useState(1);
  const { email, password } = useSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(qrCreate),
  });

  const dispatch = useDispatch();

  const handleDownload = async () => {
    html2canvas(document.getElementsByClassName("preview")[0]).then(function (
      canvas
    ) {
      var link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${title}`;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  };

  const onSubmit = async ({ title, text, url, frameText, quality }) => {
    try {
      await api.qr.create(
        email,
        password,
        title,
        text,
        fgColor.split("#")[1],
        bgColor.split("#")[1],
        url,
        frameType,
        frameText,
        frameBgColor.split("#")[1],
        frameTextColor.split("#")[1],
        quality
      );
      window.location.replace("/library");
    } catch (e) {
      if (e.response.status === 401) {
        dispatch(logoutUser());
      }
    }
  };

  return (
    <div className="main create-qrs">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="qr-config">
            <div className="qr-config-form">
              <section className="qr-section">
                <p className="error-msg">{errors.title?.message}</p>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  {...register("title", {
                    required: true,
                    onChange: (e) => {
                      setTitle(e.target.value);
                      clearErrors("title");
                    },
                  })}
                />
                <p className="error-msg">{errors.text?.message}</p>
                <input
                  name="text"
                  type="text"
                  placeholder="Add your text"
                  {...register("text", {
                    required: true,
                    onChange: (e) => {
                      clearErrors("text");
                      setText(e.target.value);
                    },
                  })}
                />
                <span className="toggle switcher-1">
                  <input type="checkbox" id="switcher-1" {...register("url")} />
                  <label htmlFor="switcher-1"></label>
                </span>
              </section>
              <label htmlFor="fgColor" className="color-label">
                <span>QR color:</span>
                <ColorPicker onClickColor={setfgColor} defaultColor={fgColor} />
              </label>
              <label htmlFor="bgColor" className="color-label">
                <span>BG color:</span>
                <ColorPicker onClickColor={setbgColor} defaultColor={bgColor} />
              </label>
              <section className="frame-section">
                <ul className="frames">
                  <li id="frame1">
                    <img src={frame1} alt="" />
                  </li>
                  <li id="frame2">
                    <img src={frame2} alt="" />
                  </li>
                  <li id="frame3">
                    <img src={frame3} alt="" />
                  </li>
                  <li id="frame4">
                    <img src={frame4} alt="" />
                  </li>
                </ul>
                <p className="error-msg">{errors.frameText?.message}</p>
                <input
                  name="frame-text"
                  type="text"
                  placeholder="Add text to the frame"
                  defaultValue={frameText}
                  {...register("frameText", {
                    required: true,
                    onChange: (e) => {
                      clearErrors("frameText");
                      setFrameText(e.target.value);
                    },
                  })}
                />
                <label htmlFor="frameColor" className="color-label">
                  <span>Frame color:</span>
                  <ColorPicker
                    onClickColor={setFrameBgColor}
                    defaultColor={frameBgColor}
                  />
                </label>
                <label htmlFor="textFrameColor" className="color-label">
                  <span>Text color:</span>
                  <ColorPicker
                    onClickColor={setFrameTextColor}
                    defaultColor={frameTextColor}
                  />
                </label>
              </section>
              <p className="error-msg">{errors.quality?.message}</p>
              <select
                name="quality"
                id="cars"
                defaultValue="DEFAULT"
                {...register("quality", {
                  required: true,
                  onChange: () => {
                    clearErrors("data");
                  },
                })}
              >
                <option value="DEFAULT" disabled>
                  Choose quality
                </option>
                <option value="L">Low</option>
                <option value="M">Medium</option>
                <option value="H">High</option>
              </select>
            </div>
          </div>
          <div className="qr-preview">
            <div className="preview">
              <QRCode
                value={text || "Hi, please enter anything"}
                size={200}
                bgColor={bgColor}
                fgColor={fgColor}
                includeMargin={true}
                level={"Q"}
              />
            </div>
            <div className="create-buttons">
              <input
                type="button"
                className="link"
                value="Download"
                onClick={handleDownload}
              />
              <input type="submit" className="link" value="Create" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
