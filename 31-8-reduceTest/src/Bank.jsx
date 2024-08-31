import "bank.css";

function Bank() {
  return (
    <div className="Mid">
      <h1>use Reducer Bank Acc</h1>
      <p>Balance:{0}</p>
      <p>Loan:{0}</p>
      <button> Open Account</button>
      <button> deposit 150</button>
      <button> withdraw 50</button>
      <button>Req a loan of 5000</button>
      <button>Pay loan</button>
      <button>close account</button>
    </div>
  );
}

export default Bank;
