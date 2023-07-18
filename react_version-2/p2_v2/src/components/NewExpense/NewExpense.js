import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ saveSubmit }) => {
  const onSubmitData = (submitData) => {
    const submitDataObj = {
      ...submitData,
      id: Math.random().toString(),
    };
    saveSubmit(submitDataObj);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitData={onSubmitData} />
    </div>
  );
};

export default NewExpense;
