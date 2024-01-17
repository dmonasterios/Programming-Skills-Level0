import useFinancialState from "../../hooks/useFinancialState";

import "./ExpensesResume.css";

const ExpensesResume = () => {
  const { financialState } = useFinancialState();

  return (
    <div className="expenses">
      <div className="expenses__paragraph">
        <p>
          Medical expenses: {financialState.expensives.medical}{" "}
          {financialState.currency}
        </p>
        <p>
          Household expenses: {financialState.expensives.household}{" "}
          {financialState.currency}
        </p>
        <p>
          Leisure expenses: {financialState.expensives.leisure}{" "}
          {financialState.currency}
        </p>
        <p>
          Savings: {financialState.expensives.savings} {financialState.currency}
        </p>
        <p>
          Education: {financialState.expensives.education}{" "}
          {financialState.currency}
        </p>
      </div>
    </div>
  );
};

export default ExpensesResume;
