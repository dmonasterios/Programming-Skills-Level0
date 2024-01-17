import useFinancialState from "../../../../hooks/useFinancialState";
import "./Incomes.css";

const Incomes = () => {
  const {financialState} = useFinancialState();
  return(
    <div className="incomes">
      <p>
        Total Incomes: {financialState.income}
      </p>
      <p>
        Currency: {financialState.currency}
      </p>
    </div>
  );
}

export default Incomes;