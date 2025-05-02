import { useState } from 'react';

function TransactionForm({ onAdd }) {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text || !amount) {
            alert('Please fill in both fields');
            return;
        }

        const transaction = {
            text,
            amount: parseFloat(amount),
            timestamp: new Date()
        };

        onAdd(transaction);


        setText('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2">
                <label className="block font-semibold mb-1">Description</label>
                <input
                type="text"
                placeholder="e.g. Salary, Rent"
                className="w-full p-2 border rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label className="block font-semibold mb-1">Amount</label>
                <input
                type="number"
                placeholder="e.g. 1000 or -500"
                className="block w-full mb-2 p-2 border border-gray-300 rounded"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">
                    Add Transaction
                </button>
            </div>
        </form>
    );
}

export default TransactionForm;