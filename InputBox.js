import React from "react";
const InputBox = (props) => {
  return (
    <div className="field">
      <label style={{ fontSize: "1rem" }}>{props.text}</label>
      <input type="text" style={{ borderRadius: "2px" }} name={props.name} />
    </div>
  );
};

export default InputBox;
