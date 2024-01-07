/*
Level 0: Excersice 2 from blindma1den discord server

2. Create a currency converter between CLP, ARS, USD, EUR, TRY, GBP with the following features:
* 		The user must choose their initial currency and the currency they want to exchange to.
* 		The user can choose whether or not to withdraw their funds. If they choose not to withdraw, it should return to the main menu.
* 		If the user decides to withdraw the funds, the system will charge a 1% commission.
* 		Set a minimum and maximum amount for each currency, it can be of your choice.
* 		The system should ask the user if they want to perform another operation. If they choose to do so, it should restart the process; otherwise, the system should close.
*/
import PromptSync from "prompt-sync";

import { printMenu, menu } from "./menu.js";

const prompt = PromptSync({ sigint: true });
let opt;

do {
  printMenu();
  opt = Number(prompt("Please select an option: "));
  console.clear();
  opt = await (menu[opt] || menu["default"])();
} while (opt !== 5 && opt !== true);

