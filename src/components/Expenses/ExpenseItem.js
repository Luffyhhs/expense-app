import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../Card/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <ExpenseTitle title={title} />
        <ExpenseAmount amount={props.amount} />
      </div>
    </Card>
  );
}

export default ExpenseItem;
