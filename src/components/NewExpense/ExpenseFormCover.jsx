import React from "react";


function ExpenseFormCover(props){

    return (
        <div >
            <button onClick={props.onButtonClick}>Add New Expense</button>
        </div>
    )

}


export default ExpenseFormCover;