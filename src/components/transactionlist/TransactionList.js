import React from 'react';
import "@/components/transactionlist/style.css";

export default function TransactionList({ transactions, deleteTransaction }) {
    return (
        <div className='list'>
            <h3>Transaction History</h3>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index} className={transaction.amount > 0 ? 'income' : 'expense'}>
                        <strong>{transaction.name}</strong>: 
                        <span>${transaction.amount.toFixed(2)}</span>
                        <button 
                            onClick={() => deleteTransaction(index)} 
                            className="delete-button"
                            aria-label="Delete transaction"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}