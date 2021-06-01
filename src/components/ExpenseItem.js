
import './ExpenseItem.css';
import ExpanseDate from './ExpenseDate';
import Card from "./Card"
import reactDom from 'react-dom';
import { useState } from 'react';

function ExpenseItem(props){

    // const [title,setTile]=useState(props.title)

    // const clickHandler = ()=>{
    //     setTile('update')

    //     console.log("clicked |||||||||");

    // };
    console.log(props.title)
    return (<Card className="expense-item"> 
            <ExpanseDate date={props.date}></ExpanseDate>

            <div className="expense-item__description">
                 <h2>{props.title}</h2>
                 <div className="expense-item__price">${props.amount}</div>
                 
            </div> 
            <button >Change title</button>          
        </Card>);

    }

export default ExpenseItem;