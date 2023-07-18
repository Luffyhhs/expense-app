import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSubmitData }) => {
  // Using single state
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     dateValue: "",
  //   });
  //   const titleHandler = (e) => {
  //     setUserInput((prev) => {
  //       return {
  //         ...prev,
  //         title: e.target.value,
  //       };
  //     });
  //   };
  //   const amountHandler = (e) => {
  //     setUserInput((prev) => {
  //       return {
  //         ...prev,
  //         amount: e.target.value,
  //       };
  //     });
  //   };
  //   const dateHandler = (e) => {
  //     setUserInput((prev) => {
  //       return {
  //         ...prev,
  //         dateValue: e.target.value,
  //       };
  //     });
  //   };

  // Using multiple state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [dateValue, setDateValue] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setDateValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: title,
      amount: amount,
      date: new Date(dateValue),
    };
    onSubmitData(expense);
    setTitle("");
    setAmount("");
    setDateValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={dateValue}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
