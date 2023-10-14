import ExpenseItem from "./ExpenseItem";
import "./ExpenseData.css";
import Card from "../UI/Card";

// this has the  same  working as expenses

const ExpenseData = (props) => {
  // console.log(props);
  return (
    <Card className="expenses">
      <ExpenseItem
        // expense={expenses[0]}
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      />
      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      />
      <ExpenseItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      />
      <ExpenseItem
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      />
    </Card>
  );
};

export default ExpenseData;