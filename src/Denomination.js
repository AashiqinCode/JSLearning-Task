import React, { useState } from "react";

const DenoComponent = (props) => {
  const { amount } = props;
  const denomination = [2000, 500, 200, 100];
  const [errormsg, setError] = useState("");
  const [flag, setFlag] = useState(false);
  function check() {
    if (amount < 0 && amount > 25000) {
      setError("Invalid Amount,Enter greater than 0 and less than 25,000");
      setError(true);
    } else {
      if (amount % 100 !== 0) {
        setError("Enter valid amount");
        setError(true);
      } else {
        for (let i of denomination) {
        }
      }
    }
  }

  return (
    <div>
      <h4>Denomination Fetched:</h4>
      <div>₹2000 x </div>
      <div>₹500 x </div>
      <div>₹200 x </div>
      <div>₹100 x </div>
      <br />
      <div>Total: {amount}</div>
    </div>
  );
};

export default DenoComponent;
