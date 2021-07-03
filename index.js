import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

const App = () => {
  return (
    <div className="ui segment">
      <h1>Basic Curd Operations</h1>

      <Form />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
