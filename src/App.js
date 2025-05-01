import { useState } from 'react';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="App">
      <Header />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList items={transactions} />
    </div>
  );
}

export default App;
