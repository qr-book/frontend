import React from "react";

import modalImage from "../assets/img/modalCreate.png";
import backImage from "../assets/img/back-arrow.png";
import { Link } from "react-router-dom";

function ModalCreate({ setModalView }) {
  const closeModal = () => {
    setModalView(0);
  };

  return (
    <div className="modal-wrap">
      <div className="modal-window col">
        <div className="back-modal-button" onClick={closeModal}>
          <img src={backImage} alt="" />
        </div>
        <div className="modalImg">
          <img src={modalImage} alt=""></img>
        </div>
        <div className="col">
          <h1>QR Book</h1>
          <span>
            Use your own colors, text and frame to attract more scans to your QR
            Code.
          </span>
        </div>
        <div className="signup-modal-button">
          <Link to="/login">Sign up for free</Link>
        </div>
      </div>
    </div>
  );
}

export default ModalCreate;
