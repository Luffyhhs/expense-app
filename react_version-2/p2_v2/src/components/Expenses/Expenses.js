import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ updateExpenses }) => {
  const [filterYear, setFilterYear] = useState("all");
  const filterChangeHandler = (filterData) => {
    setFilterYear(filterData);
  };
  const allExpenses = [...updateExpenses];
  const filterExpenses = updateExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <Card className="expenses">
      <ExpensesChart expenses={filterExpenses} />
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {filterYear === "all" ? (
        <ExpensesList filterExpenses={allExpenses} />
      ) : (
        <ExpensesList filterExpenses={filterExpenses} />
      )}
    </Card>
  );
};

export default Expenses;
