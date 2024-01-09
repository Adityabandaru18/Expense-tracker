import { Cashcontext } from "../context/context";
import { useContext } from "react";

export default function Balance() {
  const Balstore = useContext(Cashcontext);

  const money = -1 * Balstore.negmoney;
  return (
    <div className="balance">
      <h4>YOUR BALANCE</h4>
      <h1>${Balstore.posmoney + Balstore.negmoney}</h1>
      <div className="label">
        <div className="income">
          <p>INCOME</p>
          <h3 style={{ color: "green" }}>${Balstore.posmoney}</h3>
        </div>
        <div className="expenses">
          <p>EXPENSES</p>
          <h3 style={{ color: "red" }}>${money}</h3>
        </div>
      </div>
    </div>
  );
}
