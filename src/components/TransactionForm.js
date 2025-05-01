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
        <form onSubmit={handleSubmit} className="mb-4">
            <input
            type="text"
            placeholder="Description"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input
            type="number"
            placeholder="Amount"
            className="block w-full mb-2 p-2 border border-gray-300 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;