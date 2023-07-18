import React from "react";

const ExpenseAmount = (props) => {
  return (
    <div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
};

export default ExpenseAmount;
