import { Outlet, Link } from "react-router-dom";
import ExpensesForm from "../../components/ExpensesForm";
import "./Expenses.css";
import { useState } from "react";

const Expenses = () => {
  const [isShowingDetail, setisShowingDetail] = useState<boolean>(false);

  function handleOnClick(){
    setisShowingDetail(!isShowingDetail);
  }

  return (
    <div className="container">
      <div className="expenses-container">
        <ExpensesForm/>
        <Link className="expenses-container__cta" to="/">
          Regresar al Inicio
        </Link>
        { isShowingDetail ? (
          <Link className="expenses-container__cta" to="/expenses/details" onClick={handleOnClick} >
            Ver Detalle
          </Link>
        ) : (
          <Link className="expenses-container__cta" to="/expenses/resume" onClick={handleOnClick} >
            Ver Resumen
          </Link>
        )}

        <div className="expenses-container__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
