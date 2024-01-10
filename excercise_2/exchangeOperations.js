import PromptSync from "prompt-sync";
import exchangeRatesJson from "./exchangeRates.json" assert {type: 'json'};
const prompt = PromptSync({ sigint: true });

export function setCurrency(currency, key) {
  let opt;
  const currencies = {
    1: "CLP",
    2: "ARS",
    3: "USD",
    4: "EUR",
    5: "TRY",
    6: "GBP",
  };

  do {
    console.log("Available Currencies \n\n\n");
    console.log("1.- CLP - Chilean Pesos");
    console.log("2.- ARS - Argentine Pesos");
    console.log("3.- USD -  United States Dollar");
    console.log("4.- EUR - Euro");
    console.log("5.- TRY - Turkish Lira");
    console.log("6.- GBP - British Pound Sterling");
    console.log("7.- Return");
    opt = Number(prompt("Please select an option: "));
  } while (opt < 1 && opt > 7);

  return currencies[opt] || currency[key];
}

export function setAmount(){
  let amount = 0;
  do{
    console.clear();
    console.log("Set amount of money to convert \n\n\n");
    console.log("Please enter the amount of money to convert. Remember that only transactions of ten dollars or more will be processed");
    if(Number.isNaN(amount)) console.log("\n Invalid amount. Please introduce a numeric value");
    amount = Number(prompt("Please select an option: "));
  }while(Number.isNaN(amount));
  return amount;
};

export async function getExchangeRates(currency) {
  console.log('Obtaining the exchange rates for the selected currencies, please wait.');
  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("An error occurred while trying to obtain currency exchange rates. The operation will be processed using the rates of 06/01/2024.");
    prompt("Please press ENTER to continue");
    return exchangeRatesJson[currency];
  }
}

export function validateTransaction(currencyInfo, currency){
  if(currency.initial && currency.target){
    const USDrate = currencyInfo.rates['USD'];
    if(USDrate * currency.amount >= 10) return true;
  }
  return false;
}


export function withdrawFunds(currencyInfo, currency) {
  let opt;
  const targetRate = currencyInfo.rates[currency.target];
  const convertedAmount = targetRate * currency.amount;
  const commission = convertedAmount/100;
  const totalAmount = convertedAmount - commission;

  do{
    console.clear();
    console.log(`Initial currency: ${currency.initial}`);
    console.log(`Target Currency: ${currency.target}`);
    console.log(`Amount of money to convert: ${currency.amount}`);
    console.log(`exchange rate: ${targetRate}`);
    console.log(`Converted Amount: ${convertedAmount}`);
    console.log(`Commission: ${commission}`);
    console.log(`Total: ${totalAmount}`);
    opt =  prompt("Do you want to perform the operation? (Y/N): ");
  }while(opt.toLowerCase() !== 'y' && opt.toLowerCase() !== 'n');

  if(opt.toLowerCase() === 'y') {
    console.log(`successful operation. You got ${totalAmount} ${currency.target}`);
  }
  else  console.log("Operation Canceled.");
}

export function continueOperations(){
  let opt;
  do{
    opt = prompt("Do you want to perform another operation? (Y/N): ")
  }while(opt.toLowerCase() !== 'y' && opt.toLowerCase() !== 'n');

  const isAppRunning = opt.toLowerCase() === 'y' ? true : false;
  return isAppRunning;
}
