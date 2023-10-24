import ExpenseItem from "./ExpenseItem";
import "./ExpenseData.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

// this has the  same  working as expenses

const ExpenseData = (props) => {
  // console.log(props);
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    // console.log("expensedata.js");
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };

  const filteredExpense=props.expense.filter(item=>{
    return item.date.getFullYear().toString()===filteredYear;
  })
  
  let filteredData=<p>No data found..</p>

  if(filteredExpense.length>0){
    filteredData= filteredExpense.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filteredYear}
          onSelectedYear={selectedYearHandler}
        />
       {filteredData}
      </Card>
    </div>
  );
};

export default ExpenseData;
