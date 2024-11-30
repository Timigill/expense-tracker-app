'use client';

import styles from "./page.module.css";

import React, { useState } from 'react';
import TransactionForm from '@/components/transactionform/TransactionForm';

import TransactionList from '@/components/transactionlist/TransactionList';

  import BalanceSummary from '@/components/balancesummary/BalanceSummary';


export default function Home() {

  
  const [transactions, setTransactions] = useState([]);
    
  const [income, setIncome] = useState(0);

  const [expense, setExpense] = useState(0);


  function addTransaction(newTransaction) {
      setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);

      if (newTransaction.amount > 0) {
          setIncome((prevIncome) => prevIncome + newTransaction.amount);
      } else {
          setExpense((prevExpense) => prevExpense + Math.abs(newTransaction.amount));
      }
 
  }
  return (
    <>
     <div className='body'>
            <div className='mainbox'>
                <BalanceSummary income={income} expense={expense} />
                <TransactionList transactions={transactions} />
                <TransactionForm addTransaction={addTransaction} />
            </div>
        </div>
    </>
  );
}
