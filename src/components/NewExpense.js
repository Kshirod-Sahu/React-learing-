import NewExpenseForm from "./NewExpenseForm"
import "./NewExpense.css"
import { useState } from "react"

const NewExpense = (props) => {


    const [isEditing, setIsEditing]= useState(false)


    const expenseSubmithandler = (getAllExpenses) =>{
        const expenses ={
            ...getAllExpenses
            
        }
        props.newAppExpenses(expenses)
        setIsEditing(false)
    }

    const startEditingHandler = () =>{
        setIsEditing(true)
    }

    const stopEditingHandler= () =>{
        setIsEditing(false)
    }

  return(  <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}> Add Expense</button>}
        {isEditing && <NewExpenseForm submitExpense={expenseSubmithandler} onCancle={stopEditingHandler}/>}
    </div>
  )


}


export default NewExpense