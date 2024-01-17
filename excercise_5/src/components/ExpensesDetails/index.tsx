import useFinancialState from "../../hooks/useFinancialState";
import ExpenseItem from "./components/ExpenseItem";
import "./ExpensesDetails.css";

const ExpensesDetails = () => {
  const { expenseList } = useFinancialState();

  const renderListElements = () => {
    if (expenseList.length <= 0) {
      return <p>There aren't any expense register yet</p>;
    } else {
      return expenseList.map((expense) => (
        <ExpenseItem key={`expense-item-${expense.id}`} expenseItem={expense} />
      ));
    }
  };

  return <section className="expense-list">{renderListElements()}</section>;
};

export default ExpensesDetails;
