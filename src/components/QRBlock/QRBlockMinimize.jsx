import React from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function QRBlockMinimize(data) {
  const { title, text, uuid, date_update, dark_color, light_color, quality } =
    data;
  const value = uuid ? `https://localhost/link?uuid=${uuid}` : text;

  return (
    <div className="qr qr-recent">
      <div className="qr-img">
        <QRCode
          value={value}
          size={93}
          bgColor={"#" + light_color}
          fgColor={"#" + dark_color}
          includeMargin={true}
          level={quality}
        />
      </div>
      <div className="qr-info">
        <div className="qr-name">
          <div className="col">
            <span>{title}</span>
            <hr />
            <span>{dayjs.utc(date_update).local().format("DD.MM.YY")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

QRBlockMinimize.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  uuid: PropTypes.string,
  date_update: PropTypes.string.isRequired,
  dark_color: PropTypes.string.isRequired,
  light_color: PropTypes.string.isRequired,
  quality: PropTypes.string.isRequired,
};

QRBlockMinimize.defaultProps = {
  title: "Hello World",
  text: "Whoops",
  uuid: null,
  date_update: "14.12.12",
  dark_color: "#000000",
  light_color: "#ffffff",
  quality: "L",
};

export default QRBlockMinimize;
