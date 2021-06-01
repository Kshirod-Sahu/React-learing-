import { useState } from "react"
import "./NewExpenseForm.css"

const NewExpenseForm = (props) =>{

    const [entredTitle,setEntredTitle] = useState("")
    const [entredAmount,setEntredAmount] = useState("")
    const [entredDate,setEntredDate] = useState("")

    const titleChangeHandler = (event)=>{
        setEntredTitle(event.target.value)
        console
        .log(event.target.value)
    }

    const amountChangeHandler = (event) =>{

        setEntredAmount(event.target.value)
        console.log(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setEntredDate(event.target.value)
        console.log(event.target.value)
    }

    const submitHandler = (event) =>{

        event.preventDefault();
        const expenseData = {
   
            tilte:entredTitle,
            amount:entredAmount,
            date: new Date(entredDate),
            
        }

        props.submitExpense(expenseData)
        //console.log(expenseData)
        setEntredTitle("")
        setEntredDate("")
        setEntredAmount("")

    }


    return <form onSubmit={submitHandler}>

        <div className="new-expense__controls">
            
             <div className="new-expense__control"> 
                <lebel>Title</lebel>
                <input type="text" value={entredTitle} onChange={titleChangeHandler}></input>
            </div>
            
            <div className="new-expense__control"> 
                <lebel>Amount </lebel>
                <input type="number" value={entredAmount} onChange={amountChangeHandler}></input>
            </div>

            <div className="new-expense__control"> 
                <lebel>Date</lebel>
                <input type="date" value={entredDate} onChange={dateChangeHandler}></input>
            </div>
            

            <div className="new-expense__actions">  
                <button type="button" onClick={props.onCancle}> Cancel </button>
                <button type='submit'> Submit</button>
            </div>

        </div>
    </form>

}

export default NewExpenseForm