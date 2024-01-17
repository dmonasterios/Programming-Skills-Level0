import prompt from "../../utils/prompt.ts";
import {logOut, login, register} from "../Auth/authentication.ts"

type options = 'LogIn' | 'Register' | 'Exit';

const authMenu = {
  'LogIn':login,
  'Register':register,
  'Exit':logOut
}

export const printAuthMenu = async () : Promise<string> => {
  let userID : string | void;

  do{
    console.clear();
    console.log("Welcome to blindma1den University Enrollment System \n");
    let opt: options = await prompt.list<options>(['LogIn', 'Register', 'Exit']);
    userID = await authMenu[opt]();
  }while(!(typeof userID === "string"));

  return userID;
}