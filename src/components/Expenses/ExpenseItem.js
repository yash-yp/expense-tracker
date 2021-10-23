import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {
    
    // const expenseDate = props.date;
    // const expenseTitle = props.title;
    // const expenseAmount = props.amount;
    // console.log(expenseDate);
    // console.log((expenseDate).toISOString());
    // let title = props.title;
    // const [title, setTitle] = useState(props.title);
    // console.log("Yash");
    
    // function buttonClick() {
    //   setTitle("This was updated!")
      
    //   console.log("Updated");

    // }

    
    
    return (
    <Card className="expense-item">
        <div> 
            <ExpenseDate date={props.date}/>
        </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> ₹{props.amount} </div>
      </div>
      {/* <button onClick={buttonClick}>
        Change Title
      </button> */}
    </Card>
  );
}

export default ExpenseItem;
