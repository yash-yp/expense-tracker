// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  //const [filteredArray, setFilteredArray] = useState(props["expense-data"]);

  function filterYearHandler(year) {
    console.log("IN expenses.js");
    console.log(year);
    setFilteredYear(year);
    console.log("loaded");
    //props["expense-data"].map((expense) => {console.log(expense.date.getFullYear())});
    //setFilteredArray(props["expense-data"].filter((expense) => {return expense.date.getFullYear().toString()===year}));
  }

  const filteredArray = props["expense-data"].filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={filterYearHandler}
        />
        <ExpensesChart expenses={filteredArray} />
        
        <ExpenseList items={filteredArray} />
        
        {/* {filteredArray.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })} */}
        {/* <ExpenseItem
          title={props["expense-data"][0].title}
          date={props["expense-data"][0].date}
          amount={props["expense-data"][0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props["expense-data"][1].title}
          date={props["expense-data"][1].date}
          amount={props["expense-data"][1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props["expense-data"][2].title}
          date={props["expense-data"][2].date}
          amount={props["expense-data"][2].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props["expense-data"][3].title}
          date={props["expense-data"][3].date}
          amount={props["expense-data"][3].amount}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
