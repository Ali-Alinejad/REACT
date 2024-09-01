import "./Bank.css";
//eslint-disable-next-line
function Bank({ balance, loan, isActive, dispatch, loanRQ }) {
  return (
    <div className="bank-container">
      <h1 className="bank-title">use Reducer Bank Acc</h1>
      <p className="balance">Balance: {balance}</p>
      <p className="loan">Loan: {loan}</p>

      <button
        className="bank-button"
        onClick={() => dispatch({ type: "openAccount" })}
        disabled={isActive}
      >
        Open Account
      </button>

      <button
        className="bank-button"
        onClick={() => dispatch({ type: "deposit", payload: 150 })}
        disabled={!isActive}
      >
        Deposit $150
      </button>
      <button
        className="bank-button"
        disabled={!isActive}
        onClick={() => dispatch({ type: "withdraw", payload: 500 })}
      >
        Withdraw $50
      </button>
      <button
        className="bank-button"
        onClick={() =>
          dispatch({ type: "ReqLoan", payload: 5000, status: true })
        }
        disabled={!isActive ? !loanRQ : loanRQ}
      >
        Request a Loan of $5000
      </button>
      <button
        className="bank-button"
        onClick={() =>
          dispatch({ type: "PayLoan", payload: 5000, status: false })
        }
        disabled={!loanRQ}
      >
        Pay Loan
      </button>
      <button
        className="bank-button"
        onClick={() => dispatch({ type: "CloseAccount" })}
        disabled={!isActive}
      >
        Close Account
      </button>
    </div>
  );
}

export default Bank;
