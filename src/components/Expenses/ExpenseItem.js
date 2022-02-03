import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title); // for title updates
  console.log('Expense Item Evaluted');

  // let title = props.title;

  const clickHandler = () => {
    // title = 'updated';
    setTitle('Updated!');
    console.log(title);
  };
  return (
    <li>
       <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{title}</h2> //state updates */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>change Title</button> */}
    </Card>
    </li>
  );
};

export default ExpenseItem;
