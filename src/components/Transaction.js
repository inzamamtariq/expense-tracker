import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

export const Transaction = ({ transaction, text, amount }) => {
  //   console.log(uniqueId);
  const { deleteTransaction } = useContext(GlobalContext);
  //   console.log(deleteTransaction);
  const sign = amount > 0 ? "+" : "-";
  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
