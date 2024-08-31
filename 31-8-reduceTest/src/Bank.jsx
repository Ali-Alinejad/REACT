

import "./Bank.css"; // Import your CSS file

// eslint-disable-next-line react/prop-types
function Bank({ isActive, balance,loan }) {
  return (
    <div className="bank-container">
      <h1 className="bank-title">use Reducer Bank Acc</h1>
      <p className="balance">Balance: {balance}</p>
      <p className="loan">Loan: {loan}</p>

      <button className="bank-button" disabled={isActive}>
        Open Account
      </button>
      <button className="bank-button" disabled={isActive}>
        Deposit $150
      </button>
      <button className="bank-button" disabled={isActive}>
        Withdraw $50
      </button>
      <button className="bank-button" disabled={isActive}>
        Request a Loan of $5000
      </button>
      <button className="bank-button" disabled={isActive}>
        Pay Loan
      </button>
      <button className="bank-button" disabled={isActive}>
        Close Account
      </button>
    </div>
  );
}

export default Bank;
