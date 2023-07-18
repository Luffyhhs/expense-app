import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";

const ExpenseItem = ({ expense }) => {
  const title = expense.title;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div>
          <ExpenseTitle title={title} />
          <ExpenseAmount amount={expense.amount} />
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
