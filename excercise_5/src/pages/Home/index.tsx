import { useState } from "react";
import { CgPen } from "react-icons/cg";
import { Link } from "react-router-dom";
import FinancialHealth from "../../components/FinancialHealth";
import Incomes from "./components/Incomes";
import IncomesForm from "./components/IncomesForm";
import ExpensesResume from "../../components/ExpensesResume";
import ExpensesForm from "../../components/ExpensesForm";
import "./Home.css";


const Home = () => {
  const [ isIncomeFormOpen, setIsIncomeFormOpen ] = useState<boolean>(false);

  function handleOpenForm() : void {
    setIsIncomeFormOpen(!isIncomeFormOpen);
  }

  return (
    <main className="home">
      <section className="home__finantial-health">
        <h1 className="home__title">FINANCE MANAGEMENT</h1>
        <FinancialHealth />
      </section>

      <section className="home__incomes">
        <h2 className="home__title">Incomes</h2>
        {isIncomeFormOpen ?  <IncomesForm handleOpenForm={handleOpenForm} /> : <Incomes/>}
        <CgPen className="home__edit-incomes" onClick={() => handleOpenForm()}/>
      </section>

      <section className="home__expenses">
        <h2 className="home__title">Expenses</h2>
        <ExpensesForm/>
        <ExpensesResume/>
        <Link to="/expenses/details" className="home__expenses-cta">
        Ver detalle
      </Link>
      </section>
    </main>
  );
};

export default Home;
