import React from "react";
import "./ExpenseTitle.css";

const ExpenseTitle = (props) => {
  return (
    <div>
      <h2 className="expense-item__description">{props.title}</h2>
    </div>
  );
};

export default ExpenseTitle;
