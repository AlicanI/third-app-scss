import React from "react";

import "./Button.scss";

const Button = (props) => {
  return (
    <button className="button" type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
