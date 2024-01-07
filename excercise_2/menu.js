import {
  setCurrency,
  setAmount,
  getExchangeRates,
  validateTransaction,
  withdrawFunds,
  continueOperations
} from "./exchangeOperations.js";

export const currency = {
  initial: undefined,
  target: undefined,
  amount: 0,
};

function resetCurrencyValues(){
  currency.initial = undefined;
  currency.target = undefined;
  currency.amount = 0;
}

export function printMenu() {
  console.clear();
  console.log("Welcome to blindma1den Currency Converter \n\n\n");
  console.log(`Initial currency: ${currency.initial}`);
  console.log(`Target Currency: ${currency.target}`);
  console.log(`Amount of money to convert: ${currency.amount} \n\n`);
  console.log(`1.- Change Initial Currency`);
  console.log(`2.- Change Final Currency`);
  console.log(`3.- Change amount of money to convert`);
  console.log(`4.- Withdraw funds`);
  console.log(`5.- Exit \n\n`);
}

const setInitialCurrency = () => {
  currency.initial = setCurrency(currency, "initial");
}

const setTargetCurrency = () => {
  currency.target = setCurrency(currency, "target");
}

const setCurrencyAmount = () => {
  currency.amount = setAmount();
}

const executeWithdrawFunds = async () => {
  const rates = await getExchangeRates(currency.initial);
  const isValidTransaction = validateTransaction(rates,currency);
  if (isValidTransaction){
    withdrawFunds(rates, currency);
    resetCurrencyValues();
  }
  else {
    console.log("The operation does not comply with the minimum requirements to be processed.");
    console.log("Remember that only transactions of ten dollars or more will be processed.");
  }
  return continueOperations();;
}

const finishProgram = () => {
  console.log("GoodBye see you later.");
  return true;
}

const defaultOption = () => {
  console.log("Invalid Option. Please select a valid option from the menu.");
}


export const menu = {
  1:setInitialCurrency,
  2:setTargetCurrency,
  3:setCurrencyAmount,
  4:executeWithdrawFunds,
  5:finishProgram,
  default:defaultOption
}
