import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [dateValue, setDateValue] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     dateValue: "",
  //   });
  const titleHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateHandler = (event) => {
    setDateValue(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   dateValue: event.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      title,
      amount,
      date: new Date(dateValue),
    };
    // console.log(expense);
    props.onSaveExpenseForm(expense);
    setTitle("");
    setAmount("");
    setDateValue("");
  };
  return (
    <form className="new-expense__controls" onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleHandler} value={title} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountHandler}
          value={amount}
        />
      </div>
      <div className="new-expense__control">
        <label>date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2023-12-01"
          onChange={dateHandler}
          value={dateValue}
        />
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
