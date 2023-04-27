import React, { Fragment, useState } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import Card from "./Card";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
  };

  const ModalOverlay = (props) => {
    return <Card className={styles.modal}>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <button>Okay</button>
        </footer>
    </Card>
  }
  return <Fragment>{ReactDOM.createPortal(
  <Backdrop onConfirm={props.onConfirm}
  ></Backdrop>, document.getElementById('backdrop-root')
  )}
  {ReactDOM.createPortal(
    <ModalOverlay
    title={props.title}
    message={props.message}
    onConfirm={props.onConfirm}
    ></ModalOverlay>, document.getElementById('overlay-root')
  )}
  </Fragment>;
};

export default Modal;
