import React from 'react';
import "@/components/transactionlist/style.css";

export default function TransactionList({ transactions, deleteTransaction, setTransactions }) {
    const handleDelete = (index) => {
        if (typeof setTransactions === 'function') {
            setTransactions((prevTransactions) => 
                prevTransactions.filter((_, i) => i !== index)
            );
        } else {
            console.error('setTransactions is not a function');
        }
        deleteTransaction(index);
    };

    return (
        <div className='list'>
            <h3>Transaction History</h3>
            {transactions.length > 0 ? (
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index} className={transaction.amount > 0 ? 'income' : 'expense'}>
                            <strong>{transaction.name}</strong>: 
                            <span>${transaction.amount.toFixed(2)}</span>
                            <button className='delete-button'
                                onClick={() => handleDelete(index)}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    );
}