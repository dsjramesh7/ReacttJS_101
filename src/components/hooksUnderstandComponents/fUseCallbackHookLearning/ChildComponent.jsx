/* eslint-disable react/display-name */
import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("Child component getting rendered");
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponent;
