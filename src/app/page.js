'use client';

// import styles from "@app/page.module.css";

import React, { useState } from 'react';
import TransactionForm from '@/components/transactionform/TransactionForm';

import TransactionList from '@/components/transactionlist/TransactionList';

import BalanceSummary from '@/components/balancesummary/BalanceSummary';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
    if (newTransaction.amount > 0) {
      setIncome((prevIncome) => prevIncome + newTransaction.amount);
    } else {
      setExpense((prevExpense) => prevExpense + Math.abs(newTransaction.amount));
    }
  };

  const calculateBalance = () => {
    return income - expense;
  };

  const deleteTransaction = (index) => {
    setTransactions((prevTransactions) => prevTransactions.filter((transaction, i) => i !== index));
    const deletedTransaction = transactions[index];
    if (deletedTransaction.amount > 0) {
      setIncome((prevIncome) => prevIncome - deletedTransaction.amount);
    } else {
      setExpense((prevExpense) => prevExpense - Math.abs(deletedTransaction.amount));
    }
  };

  return (
    <>
      <div className="body">
        <div className="mainbox">
          <BalanceSummary income={income} expense={expense} balance={calculateBalance()} />
          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
          <TransactionForm addTransaction={addTransaction} />
        </div>
      </div>
    </>
  );
}