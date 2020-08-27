import React, { useState } from "react";
import "./styles.css";
import DenoComponent from "./Denomination";

export default function App() {
  const [amount, setAmount] = useState(0);

  const moneyHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="text-center">Alike Bank ATM</h1>

      <form className="p-3">
        <div className="form-group">
          <label htmlFor="amount">Amount(₹)</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            placeholder="Enter Amount"
            onChange={(e) => {
              moneyHandler(e);
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            return <DenoComponent amount={amount} />;
          }}
        >
          Withdrawl
        </button>
      </form>
    </div>
  );
}
