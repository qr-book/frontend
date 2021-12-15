import React from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

import * as dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";

function QRBlockMinimize(data) {
  const { title, text, uuid, date_update, dark_color, light_color, quality } =
    data;
  const value = uuid ? `https://localhost/link?uuid=${uuid}` : text;
  dayjs.extend(utc);

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
  date: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
};

QRBlockMinimize.defaultProps = {
  title: "QR code",
  date: "14.12.12",
  value: "https://ribalych.ru/wp-content/uploads/2014/02/2061.jpg",
  bgColor: "#000",
  fgColor: "#fff",
};

export default QRBlockMinimize;
