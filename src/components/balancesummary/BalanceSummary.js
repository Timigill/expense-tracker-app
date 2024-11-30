import React from 'react';
import "@/components/balancesummary/styles.css"
export default function BalanceSummary({ income, expense }) {
    return (
        <div className='box'>
            <h4 className='head'>Expense Tracker by Taimoor Gill</h4>
            <h2> <p className='current' >Current Balance </p>  <p className='inc-exp'>${(income - expense).toFixed(2)}</p> </h2>
            <div className='income-expense'>
                <div className='incexp'>
                    <p className='right'>INCOME<span className='income'>${income.toFixed(2)}</span> </p>
                    <p >EXPENSE <span className='expense'>${expense.toFixed(2)}</span> </p>
                </div>
            </div>
        </div>
    );
}
