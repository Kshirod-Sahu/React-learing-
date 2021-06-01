import { useState } from 'react';
import Card from './components/Card';
import ExpanseDate from './components/ExpenseDate';
import  ExpenseItem from './components/ExpenseItem'
import NewExpense from "./components/NewExpense"
import ExpensesFilter from "./components/ExpensesFilter"


const itemList=[
{

  title:"I Phone 11",
  amount: "999",
  date: new Date(2020,3,12)
},

{

  title:"Galaxy S20",
  amount: "849",
  date: new Date(2019,3,12)
}
];



function App() {


  const [expenses,setExpenses] = useState(itemList)

  const newExpenseHandler = expenses => {
  
    setExpenses(prevExpenses => {
      return [expenses, ...prevExpenses]
    })
  }

  console.log(expenses)

  // const [filterYear,setFilterYear] = useState("2020")
  // const filterChangeHandler = selectedYear =>{
  //   setFilterYear(selectedYear)
  //   console.log(selectedYear)
  // }

  // const filteredExpense = expenses.filter(filteredExpense=>{
  //   return filteredExpense.date.getFullYear().toString()==filterYear;
  // })


  let expenseContent = <p>No Expenses Found.</p>
  // console.log(filteredExpense.length)
 
  if(expenses.length >0) {
    expenseContent = expenses.map(exp=>
      <ExpenseItem 
       key={exp.id}     
       amount={exp.amount}
       date={exp.date}
       title={exp.title}     
      />
    )
  }


  return (
    <Card>
      <NewExpense newAppExpenses={newExpenseHandler}/>
    {/* <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>       */}
     {expenseContent}      
    </Card>
  );
}                                                                                                                                                                                                     

export default App;
