import React from "react";
import "./Bank.css"; // Import your CSS file

function Bank() {
  return (
    <div className="bank-container">
      <h1 className="bank-title">use Reducer Bank Acc</h1>
      <p className="balance">Balance: {0}</p>
      <p className="loan">Loan: {0}</p>
      <button className="bank-button">Open Account</button>
      <button className="bank-button">Deposit $150</button>
      <button className="bank-button">Withdraw $50</button>
      <button className="bank-button">Request a Loan of $5000</button>
      <button className="bank-button">Pay Loan</button>
      <button className="bank-button">Close Account</button>
    </div>
  );
}

export default Bank;
