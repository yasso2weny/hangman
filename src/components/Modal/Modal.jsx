import React, { useState } from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";
import MenuIcon from "../../../public/assets/images/icon-menu.svg";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);

    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };
  return (
    <>
      <button onClick={toggleModal} className="menu-btn">
        <img src={MenuIcon} alt="Menu Button" />
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <button onClick={toggleModal} className="btn">
              continue
            </button>
            <Link to="/category">
              <button className="btn">new category</button>
            </Link>
            <Link to="/">
              <button className="quit-btn">quit game</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
