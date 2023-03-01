import React from "react";
import styles from "./ErrorModel.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCancel} />;
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCancel}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onCancel={props.onCancel} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onCancel={props.onCancel}
        />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default ErrorModel;
