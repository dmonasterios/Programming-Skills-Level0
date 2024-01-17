import {financialStructure} from "../types/financialTypes";

type response = {
  status: 'happy-2' | 'happy-1' | 'normal' | 'sad-1' | 'sad-2';
  key: 'medical'| 'household' | 'leisure' | 'savings' | 'education';
  msj: string;
}

type maxExpense = {
  key: 'medical'| 'household' | 'leisure' | 'savings' | 'education',
  value: number,
  total: number
}

const calculateFinancialHealth = (financialState: financialStructure) : response => {
  const {expensives, income} = financialState;
  const keys = Object.keys(expensives) as Array<keyof typeof expensives>;
  const maxExpense : maxExpense = {
    key: 'medical',
    value: 0,
    total: 0
  }

  const messages = {
    'happy-2':"WOW, that's awesome. You're an expert managing your finances.",
    'happy-1':"Congratulations. You're doing an excellent work management your finances",
    'normal':"looks like we don't have enough information to calculate your financial health. Please register your total incomes and your total expenses.",
    'sad-1':`Oh, it seems that you're having problems managing your finances. Maybe you should decrease your`,
    'sad-2':"Oh no that's bad, you're spending more than you earn. Maybe is time for ask for help to a financial specialist."
  }

  if(income === 0 ) return {
    status:"normal",
    key: maxExpense.key,
    msj: messages["normal"]
  }

  keys.forEach((key) => {
    if(expensives[key] > maxExpense.value){
      maxExpense.key = key;
      maxExpense.value = expensives[key];
    }
    maxExpense.total = maxExpense.total + expensives[key];
  });


  if(maxExpense.total == income) return {
    status:'sad-1',
    key: maxExpense.key,
    msj: messages["sad-1"]+` ${maxExpense.key} expense`
  }

  if(maxExpense.value < income){
    console.log((maxExpense.value / income ) * 100 )
    if((maxExpense.value / income ) * 100 <= 30 ) return {
      status: 'happy-2',
      key:maxExpense.key,
      msj: messages["happy-2"]
    }
    else return {
      status: 'happy-1',
      key:maxExpense.key,
      msj: messages["happy-1"]
    }
  }
  return {
    status:'sad-2',
    key: maxExpense.key,
    msj: messages["sad-2"]
  };
}


export default calculateFinancialHealth;