import Bank from "./Bank.jsx";
import { useReducer } from "react";

function App() {
  const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
  };
  function reduce(state,action) {
  
    switch (action.type) {
      case "openAccount":
        return ''
      case "withdraw":
        return ''
      case "deposit":
        return ''
      case "CloseAccount":
        return ''
      case "ReqLoan":
        return ''
      case "PayLoan":
        return ''
      

    }
}
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reduce,
    initialState
  );
  return (
    <>
      <Bank
        balance={initialState.balance}
        isActive={initialState.isActive}
        loan={initialState.loan}
      />
    </>
  );
}

export default App;
