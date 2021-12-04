import React from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

function QRBlockMinimize({ title, date, value, bgColor, fgColor }) {
  return (
    <div className="qr qr-recent">
      <div className="qr-img">
        <QRCode
          value={value}
          size={93}
          bgColor={bgColor}
          fgColor={fgColor}
          includeMargin={true}
          level={"Q"}
        />
      </div>
      <div className="qr-info">
        <div className="qr-name">
          <div className="col">
            <span>{title}</span>
            <hr />
            <span>{date}</span>
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
