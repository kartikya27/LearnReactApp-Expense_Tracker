import React from "react";

import './ExpenseDate.css'

function ExpenseDate(props){
    const month = props.date?.toLocaleString("en-US", { month: "long" });
    const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date?.getFullYear();

    return(
        <div className="expense-date">
                <span>{day}, </span>
                <span>{month} </span>
                <span>{year}</span>  
        </div>
    );
}

export default ExpenseDate;