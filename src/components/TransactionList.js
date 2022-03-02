import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const context = useContext(GlobalContext);
    const {transactions} = context;

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <li className="minus" key={transaction.id}>
                    {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TransactionList;