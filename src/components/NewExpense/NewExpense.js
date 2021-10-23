import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseFormCover from "./ExpenseFormCover";

function NewExpense(props) {
  const saveExpenseDate = (enteredExpenseData) => {
    // console.log(enteredExpenseData);
    // console.log("Yash");
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100000).toString(),
    };
    // console.log(expenseData);

    props.onAddExpense(expenseData);
  };

  const [showExpenseCover, setShowExpenseCover] = useState(true);
  const toggleShowExpenseCover=() => {
    setShowExpenseCover(!showExpenseCover);
  }

  return (
    <div className="new-expense">
      {showExpenseCover && <ExpenseFormCover onButtonClick={toggleShowExpenseCover}/>}
      {(!showExpenseCover) && <ExpenseForm onSubmitExpenseData={saveExpenseDate} onCancel={toggleShowExpenseCover}/>}
    </div>
  );
}

export default NewExpense;
