import React from "react";
import InputBox from "./InputBox";
const Form = () => {
  let fields = [
    { name: "UsrName", text: "Name" },
    { name: "USRID", text: "CREDO-ID" },
    { name: "Phno", text: "Phone Number" },
    { name: "officialMail", text: "Email-ID" },
  ];
  return (
    <form className="ui form">
      {fields.map((field) => {
        return <InputBox text={field.text} name={field.name} />;
      })}
    </form>
  );
};

export default Form;
