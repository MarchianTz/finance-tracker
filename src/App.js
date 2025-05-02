import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import { collection, addDoc, getDocs} from 'firebase/firestore';
import { db } from './firebase';

import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    const fetchTransactions = async () => {
      const querySnapshot = await getDocs(collection(db, 'transactions'));
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTransactions(items);
    };

    fetchTransactions();
  }, []);


  const addTransaction = async (transaction) => {
    try {
      const docRef = await addDoc(collection(db, 'transactions'), transaction);
      setTransactions([{ id: docRef.id, ...transaction }, ...transactions]);
    } catch (err) {
      console.error("Error adding transaction: ", err)
    }
  };

  return (
    <BrowserRouter basename="/finance-tracker">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard transactions={transactions} onAdd={addTransaction} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
