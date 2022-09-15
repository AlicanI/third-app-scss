import React from "react";
import { Card, Button } from "../../index";
import "./ErrorModal.scss";

const ErrorModal = (props) => {
  return (
    <div className="backdrop" onClick={props.onErrorHandler}>
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
