/* eslint-disable no-unused-vars */
import React, { useReducer, useState, useEffect } from "react";
import "./Bank.css";
import Bank from "./Bank.jsx";
import AlertMessage from "./AlertMessage.jsx";

function App() {
  const initialState = {
    balance: 0,
    loan: 0,
    isActive: false,
    loanRQ: false,
  };

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  function Reducer(state, action) {
    switch (action.type) {
      case "openAccount":
        return {
          ...state,
          balance: 500,
          isActive: true,
        };
      case "withdraw":
        if (state.balance <= 0) return state;

        return {
          ...state,
          balance: state.balance - action.payload,
        };

      case "deposit":
        return {
          ...state,
          balance: state.balance + action.payload,
        };

      case "CloseAccount":
        return {
          isActive: false,
        };
      case "ReqLoan":
        return {
          ...state,
          loan: 5000,
          balance: state.balance + action.payload,
          loanRQ: action.status,
        };
      case "PayLoan":
        if (state.balance >= 5000) {
          return {
            ...state,
            loan: 0,
            balance: state.balance - action.payload,
            loanRQ: action.status,
          };
        } else {
          setShowAlert(true);
          return state;
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      {showAlert && <AlertMessage message="موجودی حساب شما کافی نیست" />}
      <Bank
        balance={state.balance}
        loan={state.loan}
        isActive={state.isActive}
        dispatch={dispatch}
        loanRQ={state.loanRQ}
      />
    </>
  );
}

export default App;
