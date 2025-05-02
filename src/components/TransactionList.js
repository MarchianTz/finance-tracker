function TransactionList({ items }) {
    return (
        <ul>
            {items.map((t) => (
                <li key={t.id}>
                    {t.text}: ${t.amount}
                </li>
            ))}
        </ul>
    );
}

export default TransactionList;