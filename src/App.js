import React, { useState } from "react";
import "./styles.css";
import DenoComponent from "./Denomination";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [showDeno, setDeno] = useState(false);
  const [flag, setFlag] = useState(true);

  const moneyHandler = (e) => {
    setAmount(e.target.value);
  };
  const moneyCheck = () => {
    if (amount <= 0 && amount > 25000 && amount % 100 !== 0) {
      setDeno(false);
    } else setDeno(true);
    setFlag(false);
  };
  if (flag) {
    return (
      <div className="App">
        <h1 className="text-center"> Alike Bank ATM </h1>
        <form className="p-3">
          <div className="form-group">
            <label htmlFor="amount"> Amount(₹) </label>{" "}
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter Amount"
              onChange={(e) => {
                moneyHandler(e);
              }}
            />{" "}
          </div>{" "}
          <button type="button" className="btn btn-light" onClick={moneyCheck}>
            Withdrawl
          </button>
        </form>
      </div>
    );
  }
  return <DenoComponent show={showDeno} amount={amount} />;
}
