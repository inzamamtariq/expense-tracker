import { useContext } from "react";
import React from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { Transaction } from "./Transaction";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            amount={transaction.amount}
            text={transaction.text}
            transaction={transaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
