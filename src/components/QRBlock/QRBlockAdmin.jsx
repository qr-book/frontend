import React from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function QRBlockAdmin({ data }) {
  const {
    title,
    text,
    uuid,
    date_update,
    dark_color,
    light_color,
    scans,
    quality,
  } = data;
  const value = uuid ? `https://localhost/link?uuid=${uuid}` : text;
  return (
    <div className="qr">
      <div className="qr-img">
        <QRCode
          value={value}
          size={113}
          bgColor={"#" + light_color}
          fgColor={"#" + dark_color}
          includeMargin={true}
          level={quality}
        />
      </div>
      <div className="qr-info">
        <div className="col">
          <div className="qr-name">
            <span>{title}</span>
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
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.5935 1.19357C34.7364 -0.0664287 36.6302 -0.298197 38.0433 0.648992C39.6582 1.73145 40.0513 3.9384 38.9096 5.51193L19.0113 32.9364C18.0707 34.2327 16.566 35 14.9643 35H14.6035C13.0262 35 11.5413 34.2557 10.5975 32.9919L1.20121 20.4108C-0.0441052 18.7434 0.192484 16.4006 1.74602 15.0158C3.26785 13.6593 5.56509 13.6599 7.08619 15.0172L11.1052 18.6036C13.1537 20.4316 16.293 20.2658 18.1376 18.2323L33.5935 1.19357Z"
              fill="#266D53"
            />
          </svg>
        </button>
        <button className="qr-btn">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16339 0.685343L16.5 13.0215L28.7858 0.736109C29.0012 0.506944 29.2605 0.32362 29.5484 0.19713C29.8363 0.0706404 30.1468 0.00359004 30.4612 0C31.1344 0 31.7801 0.267428 32.2561 0.743453C32.7322 1.21948 32.9996 1.86511 32.9996 2.53831C33.0055 2.84951 32.9478 3.15864 32.8299 3.44672C32.7121 3.7348 32.5366 3.99577 32.3142 4.21359L19.9015 16.499L32.3142 28.9113C32.7326 29.3206 32.9779 29.8748 32.9996 30.4597C32.9996 31.1329 32.7322 31.7785 32.2561 32.2545C31.7801 32.7306 31.1344 32.998 30.4612 32.998C30.1377 33.0114 29.8149 32.9574 29.5134 32.8394C29.2119 32.7215 28.9382 32.5421 28.7097 32.3126L16.5 19.9765L4.18877 32.2873C3.97429 32.5088 3.71806 32.6856 3.43487 32.8076C3.15168 32.9296 2.84714 32.9943 2.53881 32.998C1.86559 32.998 1.21993 32.7306 0.743892 32.2545C0.267851 31.7785 0.000413012 31.1329 0.000413012 30.4597C-0.00550525 30.1485 0.0522358 29.8394 0.170092 29.5513C0.287949 29.2632 0.463435 29.0022 0.68578 28.7844L13.0985 16.499L0.68578 4.08667C0.267414 3.6774 0.02209 3.12316 0.000413012 2.53831C0.000413012 1.86511 0.267851 1.21948 0.743892 0.743453C1.21993 0.267428 1.86559 0 2.53881 0C3.14803 0.00761492 3.73186 0.253831 4.16339 0.685343Z"
              fill="#DA623F"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

QRBlockAdmin.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  uuid: PropTypes.string,
  date_update: PropTypes.string.isRequired,
  dark_color: PropTypes.string.isRequired,
  light_color: PropTypes.string.isRequired,
  scans: PropTypes.number.isRequired,
  quality: PropTypes.string.isRequired,
};

QRBlockAdmin.defaultProps = {
  title: "Hello World",
  text: "Whoops",
  uuid: null,
  date_update: "14.12.12",
  dark_color: "#000000",
  light_color: "#ffffff",
  scans: 3301,
  quality: "L",
};

export default QRBlockAdmin;
