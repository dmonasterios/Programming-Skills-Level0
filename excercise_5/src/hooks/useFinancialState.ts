import { useContext } from "react";
import {AppContext} from "../context/AppContext";

function useFinancialState() {
  const context = useContext(AppContext);
  if(!context) throw new Error('Este hook debe estar dentro del contexto AppContext');

  return context;
}

export default useFinancialState;