import React, {useState} from "react";
import "./ExpenseForm.css";


function ExpenseForm (props) {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredAmount: '',
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        });

    }
    function dateChangeHandler(event){        
        // console.log(event);
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
    })};

    function amountChangeHandler(event){
        // console.log(event);
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
    })};

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +parseFloat(userInput.enteredAmount),
            date: new Date(userInput.enteredDate)
        }
        // console.log(expenseData);
        props.onSubmitExpenseData(expenseData);

        // Object.keys(userInput).forEach(k => {setUserInput((prevState) => { return {...prevState, k: ''}})});
        // userInput.enteredDate ='';
        // userInput.enteredTitle= '';
        // userInput.enteredAmount = '';
        setUserInput((prevState) => {

           return { enteredAmount: '',
            enteredDate: '',
            enteredTitle: ''}
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}></input>                    
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} onChange={amountChangeHandler}></input>                    
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}></input>                    
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>

    )

}


export default ExpenseForm;
