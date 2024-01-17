/*
Level 0: Excersice 3 from blindma1den discord server

3. Create an university enrollment system with the following characteristics:
* 		The system has a login with a username and password.
* 		Upon logging in, a menu displays the available programs: Computer Science, Medicine, Marketing, and Arts.
* 		The user must input their first name, last name, and chosen program.
* 		Each program has only 5 available slots. The system will store the data of each registered user, and if it exceeds the limit, it should display a message indicating the program is unavailable.
* 		If login information is incorrect three times, the system should be locked.
* 		The user must choose a campus from three cities: London, Manchester, Liverpool.
* 		In London, there is 1 slot per program; in Manchester, there are 3 slots per program, and in Liverpool, there is 1 slot per program.
* 		If the user selects a program at a campus that has no available slots, the system should display the option to enroll in the program at another campus.
*/
import { printAuthMenu } from "./lib/Menu/authMenu.ts";
import { printMenu } from "./lib/Menu/menu.ts";

let userID : string = "";

do{
  userID = await printAuthMenu();
  if(userID !== "") await printMenu(userID);
}while(true);
