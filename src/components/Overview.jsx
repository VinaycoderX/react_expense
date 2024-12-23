import React, { useState } from 'react'
import "./Overview.css"
import { ToastContainer, toast } from 'react-toastify';

const Overview = (props) => {

    const [isAddTxnVisible, toggleAddTxn] = useState(false);
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("EXPENSE")
    const [errorMessage, setErrorMessage] = useState ("")

    const handleAddTransaction = () => {
      if (amount && desc && type) {
        const newTransaction = {
          id: Date.now(),
          amount: Number(amount),
          desc,
          type 
        };

        props.addTransaction(newTransaction);
        toggleAddTxn(false); // Hide the form after adding
        console.log({amount, desc, type});
          setAmount("");
          setDesc("");
          setType("");
      } else {
          toast.error("Please fill all the fields");
      }
    };
    const handleAddTxnClick = () => {
      toggleAddTxn(!isAddTxnVisible)
    };

  return (
  <div className='overviewc'>
    <div className='balance-box' >
        Balance: ${props.income - props.expense}
          <button className='add-transaction' onClick={handleAddTxnClick}>
            {isAddTxnVisible ? "Cancel" : "ADD"}
            </button>
    </div>
    {isAddTxnVisible && (
      <div className='add-transaction-container'>
        <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        <input
            type="text"
            className='desc'
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        <div className="radio-box">
          <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>
          <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="income">Income</label>
        </div>
        <button className="add-transaction" onClick={handleAddTransaction}>
            Add Transaction
          </button>
      </div>
    )}

    <div className="expense-container" >
      <div className="expense-box">
        Expense: ${props.expense}
      </div>
      Income<span>${props.income}</span>
    </div>
  
{/* Render the transaction list */}
  <div className='transaction-list'>
    <h3>Transaction History</h3>
    {props.transaction.length > 0 ?
    (
      <ul>
        {props.transaction.map((txn) => (
          <li key={txn.id}>
            <span>{txn.desc}</span>
            <span>
            ${txn.amount}
            </span>
          </li>
        ))}
      </ul>
    ) : (
    <p>No transacts</p>
    )}
  </div>
  <ToastContainer />
  </div>
  );
}; 

export default Overview