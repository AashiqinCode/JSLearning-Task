import React, { useState } from "react";

import "./styles.css";
import DenoComponent from "./Denomination";

export default function App() {
  const [amount, setAmount] = useState(0);

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
          />
        </div>
        <button
          type="button"
          className="btn btn-light"
          onClick={(e) => {
            setAmount(e.target.value);
          }}
        >
          Withdrawl
        </button>
        <DenoComponent amount={amount} />
      </form>
    </div>
  );
}
