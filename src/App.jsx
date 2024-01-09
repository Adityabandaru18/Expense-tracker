import React from "react";
import Balance from "./components/Balance";
import History from "./components/History";
import Transactions from "./components/Transactions";
import ContextProvider from "./context/context.js";

export default function App() {
  return (
    <div className="main">
      <ContextProvider>
        <h2>Expense Tracker</h2>
        <Balance />
        <History />
        <Transactions />
      </ContextProvider>
    </div>
  );
}
