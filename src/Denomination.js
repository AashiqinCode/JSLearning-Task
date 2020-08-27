import React from "react";

const DenoComponent = (props) => {
  const { show, amount } = props;
  const denomination = [2000, 500, 200, 100];
  const resultArray = [];

  let total = amount;

  // console.log(amount, show);
  if (show) {
    for (let i = 0; i < denomination.length; i++) {
      resultArray.push(Math.floor(total / denomination[i]));
      // Get the new total
      total = total % denomination[i]; //total=amount
    }
    return (
      <div>
        <h4 style={{ color: "#144F36" }}> Denomination Fetched: </h4>
        <div className="font-weight-bold">
          <div> ₹2000 x {resultArray[0]} </div>{" "}
          <div> ₹500 x {resultArray[1]} </div>{" "}
          <div> ₹200 x {resultArray[2]} </div>{" "}
          <div> ₹100 x {resultArray[3]} </div> <br />
          <div> Total: {amount} </div>{" "}
        </div>
      </div>
    );
  } else {
    return <div>Invalid Amount</div>;
  }
};

export default DenoComponent;
