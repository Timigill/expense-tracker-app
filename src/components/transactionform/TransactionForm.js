import "@/components/transactionform/style.css";
import React, { useState } from 'react';

export default function TransactionForm({ addTransaction }) {
    const [amount, setAmount] = useState('');
    const [transactionName, setTransactionName] = useState('');
    const [nameError, setNameError] = useState('');
    const [amountError, setAmountError] = useState('');

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    function handleNameChange(event) {
        setTransactionName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const value = parseFloat(amount);
        
        // Reset error messages
        setNameError('');
        setAmountError('');

        let isValid = true;

        if (!transactionName.trim()) {
            setNameError("Transaction name is required.");
            isValid = false;
        }

        if (isNaN(value)) {
            setAmountError("Transaction Amount is required.");
            isValid = false;
        }

        if (!isValid) return; // If not valid, exit early

        const newTransaction = {
            name: transactionName,
            amount: value,
        };

        addTransaction(newTransaction);

        // Clear the input fields
        setAmount('');
        setTransactionName('');
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Add New Transaction</label>
            <input
                type="text"
                value={transactionName}
                onChange={handleNameChange}
                placeholder="Enter Transaction Detail"
            />
            {nameError && <div className="error-message">{nameError}</div>} {/* Error for name */}
            <br/>
            <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="Enter Transaction Amount"
            />
            {amountError && <div className="error-message">{amountError}</div>} {/* Error for amount */}
            <br/>
            <button type="submit">Add Transaction</button>
        </form>
    );
}