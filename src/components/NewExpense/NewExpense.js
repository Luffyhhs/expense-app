import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ onAddData }) => {
  const onSaveExpenseFormHandler = (onSaveData) => {
    const onSaveObj = {
      ...onSaveData,
      id: Math.random(),
    };
    onAddData(onSaveObj);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={onSaveExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
