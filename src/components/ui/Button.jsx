import React from "react";

const Button = (props) => {
  const myClass = `${props.type}`;
  return (
    <button disabled={props.disabled} className={myClass} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
