import { Button } from "@mui/material";
import { Cashcontext } from "../context/context";
import { useContext, useState } from "react";

export default function Transactions() {
  const cashContext = useContext(Cashcontext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleTextChange = (event) => setText(event.target.value);
  const handleAmountChange = (event) => setAmount(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const numericAmount = parseFloat(amount);

    const isTextValid = /^[A-Za-z]+$/.test(text.trim());

    if (
      !text.trim() ||
      isNaN(numericAmount) ||
      !isTextValid ||
      numericAmount === 0
    ) {
      alert("Invalid input. Please provide a valid text and non-zero amount.");
      return;
    }

    if (numericAmount < 0) {
      cashContext.setnegmoney((prev) => prev + numericAmount);
    } else if (numericAmount > 0) {
      cashContext.setposmoney((prev) => prev + numericAmount);
    } else {
      alert("Invalid Amount!");
      return;
    }

    cashContext.settext((prevtext) => [...prevtext, text]);
    cashContext.settot((prev) => [...prev, amount]);
    setText("");
    setAmount("");
  };

  return (
    <div className="transactions">
      <h3>Add new transaction</h3>
      <br />
      <form className="form" onSubmit={handleSubmit}>
        <h3>Text</h3>
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={handleTextChange}
        />
        <h3>Amount</h3>
        <h4>{"{negative - expense , positive - income}"}</h4>
        <br></br>
        <input
          type="text"
          placeholder="Enter amount..."
          value={amount}
          onChange={handleAmountChange}
        />
        <Button variant="contained" color="success" type="submit">
          Add transaction
        </Button>
      </form>
    </div>
  );
}
