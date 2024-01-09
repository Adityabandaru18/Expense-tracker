import React from "react";
import Button from "@mui/material/Button";
import { Cashcontext } from "../context/context";
import { useContext } from "react";

export default function Carddetails(props) {
  const Changestore = useContext(Cashcontext);
  const [Del, setD] = React.useState(false);
  let colorofdiv = {};
  if (props.total < 0) {
    colorofdiv = "red";
  } else {
    colorofdiv = "green";
  }
  function Delete() {
    setD((prev) => !prev);
    if (props.total < 0) {
      Changestore.setnegmoney((prev) => prev - props.total);
    } else {
      Changestore.setposmoney((prev) => prev - props.total);
    }
  }
  const Divdisplay = {
    display: Del && "none",
    color: colorofdiv,
  };
  const Lastdiv = {
    backgroundColor: colorofdiv,
    width: "4px",
    height: "34px",
  };
  return (
    <div className="final" style={Divdisplay}>
      <h3>{props.text}</h3>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h3 style={{ display: "inline", marginRight: "15px", color: "fff" }}>
          {props.total}
        </h3>
        <br></br>
        <Button onClick={Delete}>Delete</Button>
        <div style={Lastdiv}></div>
      </div>
    </div>
  );
}
