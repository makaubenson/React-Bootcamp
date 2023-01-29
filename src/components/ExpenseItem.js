import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//A component in react is just a js function.
function ExpenseItem(props) {
  //we access the set attributes using props.(which stands for properties)
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
