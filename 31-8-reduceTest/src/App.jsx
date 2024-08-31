import { useReducer } from "react";
import Bank from './Bank.jsx';
function App() {
  const initialState = ({
    deposit: 150,
    OpenAccount: true,
    CloseAccount: false,
    withdraw: false,
    RqLoan: false,
    PayL: false,
  }[(state, dispatch)] = useReducer(reduce, initialState));

  return <>
  <Bank />
  
  
  </>;
}

export default App;
