import Header from '../components/Header';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

function Dashboard({ transactions, onAdd }) {
    return (
        <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow rounded">
            <Header />
            <TransactionForm onAdd={onAdd} />
            <TransactionList items={transactions} />
        </div>
    );
}

export default Dashboard;
