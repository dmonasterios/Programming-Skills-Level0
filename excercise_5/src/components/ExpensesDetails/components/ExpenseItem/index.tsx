import { expenseListItem } from "../../../../types/financialTypes"
import { format } from 'date-fns';
import "./ExpenseItem.css";
type Props = {
  expenseItem: expenseListItem
}

const ExpenseItem = ({expenseItem}:Props) => {
  const expenseDate = format(expenseItem.date, "dd-MM-yyyy");
  return(
    <div className="expense-item">
      <p>ID: {expenseItem.id}</p>
      <p>Title: {expenseItem.title}</p>
      <p>Description: {expenseItem.description? expenseItem.description : "N/A"}</p>
      <p>Type: {expenseItem.type}</p>
      <p>Amount: {expenseItem.amount}</p>
      <p>Date: {expenseDate}</p>
    </div>
  )
}

export default ExpenseItem;