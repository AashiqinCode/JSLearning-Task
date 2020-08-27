import React, { useState } from "react";

const DenoComponent = (props) => {
  const { amount } = props;
  const denomination = [2000, 500, 200, 100];
  const resultArray = [];
  const [errormsg, setError] = useState("");

  let total = amount;

  function check() {
    if (amount < 0 && amount > 25000) {
      setError("Invalid Amount,Enter greater than 0 and less than 25,000");
    } else {
      if (amount % 100 !== 0) {
        setError("Enter valid amount");
      } else {
        for (let i = 0; i < denomination.length; i++) {
          resultArray.push(Math.floor(total / denomination[i]));
          // Get the new total
          total = total % denomination[i]; //total=amount
        }
      }
    }
  }

  check();
  if (errormsg !== null) {
    return (
      <div>
        <h4>Denomination Fetched:</h4>
        <div>₹2000 x {resultArray[0]}</div>
        <div>₹500 x {resultArray[1]}</div>
        <div>₹200 x {resultArray[2]} </div>
        <div>₹100 x {resultArray[3]}</div>
        <br />
        <div>Total: {amount}</div>
      </div>
    );
  } else {
    return <div>{errormsg}</div>;
  }
};

export default DenoComponent;
