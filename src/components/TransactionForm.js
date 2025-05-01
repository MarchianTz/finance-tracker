import { useState } from 'react';

function TransactionForm({ onAdd }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description || !amount) return;

        const newTransaction = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
        };

        onAdd(newTransaction);
        setDescription('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;