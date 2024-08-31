/* eslint-disable no-unused-vars */
import { useReducer } from "react";
import "./Bank.css"; // Import your CSS file

function App() {
  const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
  };
  function Reducer(state, action) {
    switch (action.type) {
      case "openAccount":
        console.log(state);
        return {
          ...state,
          balance: 500,
          isActive: true,
        };
      case "withdraw":
        return {
          ...state,
          balance: 500, // Assuming a fixed withdrawal amount
        };

      case "deposit":
        return "";
      case "CloseAccount":
        return "";
      case "ReqLoan":
        return "";
      case "PayLoan":
        return "";
      default:
        throw new Error("unknown action type " + action.type);
    }
  }
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    Reducer,
    initialState
  );
  return (
    <>
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

        <button className="bank-button" disabled={!isActive}>
          Deposit $150
        </button>
        <button
          className="bank-button"
          disabled={!isActive}
          onClick={() => dispatch({ type: "withdraw" })}
        >
          Withdraw $50
        </button>
        <button className="bank-button" disabled={!isActive}>
          Request a Loan of $5000
        </button>
        <button className="bank-button" disabled={!isActive}>
          Pay Loan
        </button>
        <button className="bank-button" disabled={!isActive}>
          Close Account
        </button>
      </div>
    </>
  );
}

export default App;
