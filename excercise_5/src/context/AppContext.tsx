import { createContext, useState } from "react";
import {expenseListItem, financialStructure} from "../types/financialTypes";

const defaultFinancialState : financialStructure ={
  income: 0,
  expensives:{
    medical: 0,
    household: 0,
    leisure: 0,
    savings: 0,
    education: 0,
  },
  currency: "Bs"
}

export interface IAppContext{
  expenseList: expenseListItem[],
  financialState: financialStructure,
  setExpenseList: React.Dispatch<React.SetStateAction<expenseListItem[]>>,
  setFinancialState: React.Dispatch<React.SetStateAction<financialStructure>>,
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppContextProvider = ({children} : {children:JSX.Element}) => {

  const [expenseList, setExpenseList] = useState<expenseListItem[]>([]);
  const [financialState, setFinancialState] = useState<financialStructure>(defaultFinancialState);

  const sharedData: IAppContext = {
    expenseList,
    financialState,
    setExpenseList,
    setFinancialState
  }

  return(
    <AppContext.Provider
      value={sharedData}
    >
      {children}
    </AppContext.Provider>
  );
};