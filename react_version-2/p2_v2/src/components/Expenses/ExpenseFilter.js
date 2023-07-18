import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = ({ onChangeFilter, selected }) => {
  const dropDownChangeHandler = (e) => {
    const selectedYear = e.target.value;
    onChangeFilter(selectedYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={selected} onChange={dropDownChangeHandler}>
          <option value="all">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
