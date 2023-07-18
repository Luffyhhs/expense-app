import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul className="expenses-list">
      {props.filterExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">No Expense Found</h2>
      ) : (
        props.filterExpenses.map((expense) => {
          return <ExpenseItem expense={expense} key={expense.id} />;
        })
      )}
    </ul>
  );
};

export default ExpensesList;
