import { useState } from 'react'




import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Overview from './components/Overview';

function App() {
   // State to store transaction list
  const [transaction, setTransaction] = useState([])

   // States for income and expense
   const [income, setIncome] = useState(0);  // Example income value
   const [expense, setExpense] = useState(0);

  // The transaction parameter in addTransaction now holds the newTransaction object.
  //  const addTransaction = (transaction) => {
  //   setTransaction((prevTransactions) =>
  //     [...prevTransactions, transaction])

  const addTransaction = (transaction) => {
    setTransaction((prevTransactions) => {
      console.log('Previous transactions:', prevTransactions); // Log previous state
      return [...prevTransactions, transaction]; // Return the new state
    });

  if (transaction.type === "INCOME"){
    setIncome((prevIncome) => prevIncome + transaction.amount);
  } else if (transaction.type === "EXPENSE"){
    setExpense((prevExpense) => prevExpense + transaction.amount)
  }
  };

  return (
    <>
      <div>

        <Home />

      <div className="user-inputs">
        Total Income
    
        <input
            type="number"
            placeholder="Enter Income"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
          />
        

          
          Remaining Balance
          <input
            type="number"
            placeholder="Enter Expense"
            value={expense}
            onChange={(e) => setExpense(Number(e.target.value))}
          />
      </div>

        <Overview addTransaction={addTransaction} 
      income={income}
      expense={expense} transaction = {transaction}
      />
      {/* <Transaction 
      transaction={transaction} /> */}
      </div>
    </>
  )

}

export default App
