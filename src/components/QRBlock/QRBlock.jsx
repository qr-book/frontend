import React from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";

function QRBlock(data) {
  const {
    title,
    text,
    uuid,
    date_update,
    dark_color,
    light_color,
    quality,
    scans,
  } = data;
  const value = uuid ? `https://localhost/link?uuid=${uuid}` : text;
  dayjs.extend(utc);
  return (
    <div className="qr">
      <div className="qr-img">
        <QRCode
          value={value}
          size={113}
          bgColor={`#${light_color}`}
          fgColor={`#${dark_color}`}
          includeMargin={true}
          level={quality}
        />
      </div>
      <div className="qr-info">
        <div className="col">
          <div className="qr-name">
            <span className="qrTitle">{title}</span>
            <span>{dayjs.utc(date_update).local().format("DD.MM.YY")}</span>
          </div>
          <hr />
          <div className="qr-stat">
            <div className="col">
              <div className="row">
                {uuid ? <span>URL: </span> : <span>Text: </span>}
                {uuid ? (
                  <a className="qr-value" href={text}>
                    {text}
                  </a>
                ) : (
                  <span className="qr-value">{text}</span>
                )}
                <span
                  className="url-copy"
                  onClick={() => {
                    navigator.clipboard.writeText(text);
                  }}
                >
                  Copy me
                </span>
              </div>
              <span>Scans {scans}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="qr-buttons">
        <button className="qr-btn">
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.154 30H11.8457C11.5131 30.0001 11.1905 29.8832 10.9313 29.6687C10.6722 29.4543 10.4921 29.1552 10.4209 28.821L9.82735 25.995C9.03556 25.6381 8.28478 25.1919 7.58881 24.6645L4.90985 25.542C4.59276 25.646 4.25061 25.6353 3.94024 25.5117C3.62986 25.3881 3.36993 25.159 3.2036 24.8625L0.543602 20.136C0.379022 19.8392 0.317243 19.4937 0.368372 19.1561C0.419501 18.8185 0.580511 18.5087 0.82506 18.2775L2.90318 16.3275C2.80868 15.4442 2.80868 14.5528 2.90318 13.6695L0.82506 11.724C0.580164 11.4927 0.418935 11.1826 0.367798 10.8447C0.316661 10.5067 0.378649 10.161 0.543602 9.864L3.19777 5.1345C3.36409 4.83797 3.62403 4.60888 3.9344 4.48528C4.24478 4.36167 4.58692 4.35099 4.90402 4.455L7.58298 5.3325C7.93881 5.0625 8.30923 4.8105 8.69131 4.5825C9.06027 4.3695 9.43943 4.176 9.82735 4.0035L10.4224 1.1805C10.4932 0.846293 10.6729 0.547028 10.9318 0.332319C11.1907 0.117611 11.5131 0.000356134 11.8457 -3.8147e-06H17.154C17.4866 0.000356134 17.809 0.117611 18.0679 0.332319C18.3268 0.547028 18.5065 0.846293 18.5774 1.1805L19.1782 4.005C19.5865 4.191 19.9861 4.3995 20.3726 4.632C20.7328 4.8465 21.0813 5.082 21.4167 5.3355L24.0971 4.458C24.414 4.35437 24.7559 4.36525 25.0659 4.48884C25.376 4.61242 25.6357 4.84129 25.8019 5.1375L28.4561 9.867C28.7944 10.4775 28.6778 11.25 28.1746 11.7255L26.0965 13.6755C26.191 14.5588 26.191 15.4502 26.0965 16.3335L28.1746 18.2835C28.6778 18.7605 28.7944 19.5315 28.4561 20.142L25.8019 24.8715C25.6356 25.168 25.3757 25.3971 25.0653 25.5207C24.7549 25.6443 24.4128 25.655 24.0957 25.551L21.4167 24.6735C20.7213 25.2005 19.971 25.6463 19.1796 26.0025L18.5774 28.821C18.5062 29.1549 18.3263 29.4538 18.0675 29.6683C17.8087 29.8827 17.4864 29.9997 17.154 30V30ZM14.494 9C12.9469 9 11.4632 9.63214 10.3692 10.7574C9.27527 11.8826 8.66068 13.4087 8.66068 15C8.66068 16.5913 9.27527 18.1174 10.3692 19.2426C11.4632 20.3679 12.9469 21 14.494 21C16.0411 21 17.5248 20.3679 18.6188 19.2426C19.7128 18.1174 20.3274 16.5913 20.3274 15C20.3274 13.4087 19.7128 11.8826 18.6188 10.7574C17.5248 9.63214 16.0411 9 14.494 9V9Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="qr-btn">
          <svg
            width="30"
            height="36"
            viewBox="0 0 30 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 0.75C16.6178 0.74994 18.1726 1.37722 19.3375 2.49992C20.5023 3.62262 21.1865 5.15328 21.246 6.77L21.25 7.001L28 7C28.4515 7.0002 28.8855 7.17491 29.2112 7.48761C29.5369 7.80032 29.7291 8.2268 29.7477 8.67794C29.7663 9.12907 29.6098 9.56993 29.311 9.90837C29.0121 10.2468 28.594 10.4566 28.144 10.494L28 10.5H26.833L25.206 32.07C25.1253 33.1387 24.6438 34.1375 23.8579 34.8663C23.072 35.5951 22.0398 36 20.968 36H9.032C7.96021 36 6.92799 35.5951 6.14211 34.8663C5.35622 34.1375 4.8747 33.1387 4.794 32.07L3.166 10.5H2C1.56065 10.5 1.13739 10.3347 0.814292 10.037C0.491194 9.73924 0.291901 9.33088 0.256 8.893L0.25 8.75C0.250037 8.31065 0.415331 7.88739 0.713048 7.56429C1.01076 7.24119 1.41912 7.0419 1.857 7.006L2 7H8.75C8.75 3.702 11.305 1 14.544 0.766L14.771 0.754L15 0.75ZM18.75 13.75C18.4405 13.7499 18.142 13.8645 17.9122 14.0718C17.6824 14.279 17.5377 14.5642 17.506 14.872L17.5 15V27L17.506 27.128C17.5364 27.4369 17.6805 27.7234 17.9105 27.9318C18.1404 28.1402 18.4397 28.2557 18.75 28.2557C19.0603 28.2557 19.3596 28.1402 19.5895 27.9318C19.8195 27.7234 19.9636 27.4369 19.994 27.128L20 27V15L19.994 14.872C19.9623 14.5642 19.8176 14.279 19.5878 14.0718C19.358 13.8645 19.0595 13.7499 18.75 13.75V13.75ZM11.25 13.75C10.9405 13.7499 10.642 13.8645 10.4122 14.0718C10.1824 14.279 10.0377 14.5642 10.006 14.872L10 15V27L10.006 27.128C10.0364 27.4369 10.1805 27.7234 10.4105 27.9318C10.6404 28.1402 10.9397 28.2557 11.25 28.2557C11.5603 28.2557 11.8596 28.1402 12.0895 27.9318C12.3195 27.7234 12.4636 27.4369 12.494 27.128L12.5 27V15L12.494 14.872C12.4623 14.5642 12.3176 14.279 12.0878 14.0718C11.858 13.8645 11.5595 13.7499 11.25 13.75V13.75ZM15.168 4.255L15 4.25C14.2997 4.24997 13.6258 4.51709 13.1157 4.99689C12.6056 5.47669 12.2978 6.13302 12.255 6.832L12.25 7.001L17.75 7C17.75 6.29971 17.4829 5.62579 17.0031 5.1157C16.5233 4.60561 15.867 4.29778 15.168 4.255V4.255Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

QRBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  date_update: PropTypes.string.isRequired,
  dark_color: PropTypes.string.isRequired,
  light_color: PropTypes.string.isRequired,
  scans: PropTypes.number.isRequired,
  quality: PropTypes.string.isRequired,
};

QRBlock.defaultProps = {
  title: "Hello World",
  text: "Whoops",
  uuid: null,
  date_update: "14.12.12",
  dark_color: "#000000",
  light_color: "#ffffff",
  scans: 3301,
  quality: "L",
};

export default QRBlock;
