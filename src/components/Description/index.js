import React from "react";
import "./style.css";

function Description(props) {
  return <h3 className="description">{props.children}</h3>;
}

export default Description;