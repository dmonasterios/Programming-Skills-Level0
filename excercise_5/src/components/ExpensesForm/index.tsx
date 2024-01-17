import { expenseListItem } from "../../types/financialTypes";
import { CgMathPlus, CgClose } from "react-icons/cg";
import { useState } from "react";
import "./ExpensesForm.css";
import useFinancialState from "../../hooks/useFinancialState";
import generateID from "../../utils/generateID";

type HTMLFormTypes = HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement;

const ExpensesForm = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<expenseListItem>(
    {} as expenseListItem
  );
  const { setExpenseList, expenseList, setFinancialState, financialState } =
    useFinancialState();

  function handleOnChange(e: React.ChangeEvent<HTMLFormTypes>) {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
  }

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
    handleFormReset();
  }

  function handleSubmit(e: React.FormEvent<HTMLElement>): void {
    const amount = Number(financialState.expensives[formData.type]) + Number(formData.amount);
    e.preventDefault();
    setExpenseList([...expenseList, {...formData, id:generateID()}]);
    setFinancialState({
      ...financialState,
      expensives: {
        ...financialState.expensives,
        [formData.type]: amount,
      },
    });
    setFormData({} as expenseListItem);
    handleOpenModal();
    handleFormReset();
  }

  function handleFormReset(){
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      input => (input.value = "")
    );
  }

  return (
    <>
      <button className="btn" onClick={handleOpenModal}>
        <CgMathPlus />
      </button>

      <section className={`modal ${isModalOpen ? "modal--open" : ""}`}>
        <div className="modal__container">
          <form className="modal__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="btn modal__close" onClick={handleOpenModal}>
              <CgClose />
            </div>
            <h2 className="modal__title">Register Expense</h2>
            <div className="modal__group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="modal__group">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                onChange={handleOnChange}
                cols={30}
                rows={5}
              ></textarea>
            </div>

            <div className="modal__group">
              <label htmlFor="type">Expenses Types</label>
              <select defaultValue="" required name="type" onChange={handleOnChange}>
                <option value="" disabled>Select an Option</option>
                <option value="medical">Medical Expense</option>
                <option value="household">Household Expense</option>
                <option value="leisure">Leisure Expense</option>
                <option value="savings">Savings</option>
                <option value="education">Education</option>
              </select>
            </div>

            <div className="modal__group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                onChange={handleOnChange}
                name="amount"
                required
              />
            </div>

            <div className="modal__group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                onChange={handleOnChange}
                name="date"
                required
              />
            </div>

            <button type="submit" className="modal__submit-btn">
              Register
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ExpensesForm;
