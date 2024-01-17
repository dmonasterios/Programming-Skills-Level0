import { useState } from "react";
import useFinancialState from "../../../../hooks/useFinancialState";
import {financialStructure} from "../../../../types/financialTypes";
import "./IncomesForm.css";

type formEstruture = {
  income: number;
  currency: string;
}

type Props = {
  handleOpenForm :() => void;
}

const IncomesForm = ({handleOpenForm} : Props) => {
  const { financialState, setFinancialState } = useFinancialState();

  const defaultValues: formEstruture = {
    income: financialState.income,
    currency:financialState.currency
  }

  const [formData, setFormData] = useState<formEstruture>(defaultValues);

function handleOnChange(e:React.ChangeEvent<HTMLInputElement>) : void{
  const { name, value } = e.target;
  const newFormData = {
    ...formData,
    [name]: value,
  };
  setFormData(newFormData);
}

  function handleSubmit (e: React.FormEvent<HTMLElement>): void {
    e.preventDefault();
    const newFinancialState: financialStructure = {
      ...financialState,
      income: formData.income,
      currency: formData.currency
    }
    setFinancialState(newFinancialState);
    handleOpenForm();
  }


  return (
    <form className="incomes-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="incomes-form__group">
        <label className="incomes-form__label" htmlFor="income">Incomes:</label>
        <input
          onChange={handleOnChange}
          className="incomes-form__input"
          type="number"
          name="income"
          id="income"
          defaultValue={formData.income}
        />
      </div>

      <div className="incomes-form__group">
        <label className="incomes-form__label" htmlFor="currency">Currency:</label>
        <input
          onChange={handleOnChange}
          className="incomes-form__input"
          type="text"
          name="currency"
          id="currency"
          defaultValue={formData.currency}
        />
      </div>
      <button className="incomes-form__btn" type="submit">Guardar</button>
    </form>
  );
};

export default IncomesForm;
