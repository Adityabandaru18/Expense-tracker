import React from "react";
import { Cashcontext } from "../context/context";
import { useContext } from "react";
import Carddetails from "./Carddetails";
export default function Card() {
  const store = useContext(Cashcontext);

  if (!Array.isArray(store.text)) {
    return <div>No transactions yet.</div>;
  }

  return (
    <div>
      {store.text.map((text, index) => (
        <Carddetails text={text} total={store.tot[index]} key={index} />
      ))}
    </div>
  );
}
