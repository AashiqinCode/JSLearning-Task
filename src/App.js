import React, { useState } from "react";
import "./styles.css";

import DenoComponent from "./Denomination";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [showDeno, setDeno] = useState(true);

  // console.log(amount, showDeno, flag);

  const toggle = () => {
    const a = +document.getElementById("amount").value;
    console.log(typeof a);
    setAmount(a);
    if (amount === 0 || amount > 25000 || amount % 100 !== 0) {
      setDeno(false);
    } else setDeno(true);
  };

  return (
    <div className="App">
      <h1 className="text-center title"> Alike Bank ATM </h1>

      <div className="container">
        <div className="row">
          <div className="col col-0 col-lg-3"></div>
          <div className="col col-12 col-lg-9">
            <form className="p-3">
              <div className="form-group">
                <label htmlFor="amount" style={{ color: "white" }}>
                  {" "}
                  Amount(₹){" "}
                </label>{" "}
                <input
                  type="text"
                  className="form-control w-75"
                  id="amount"
                  placeholder="Enter Amount"
                />{" "}
              </div>{" "}
              <button type="button" className="btn btn-light" onClick={toggle}>
                Withdraw
              </button>
            </form>

            {/* {amount == null && <div className="text-danger">*Enter some amount</div>} */}

            <DenoComponent show={showDeno} amount={amount} />
          </div>
        </div>
      </div>
    </div>
  );
}
