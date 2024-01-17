import users from "../../utils/Users.ts";
import prompt from "../../utils/prompt.ts";
import {User} from "../../types/types.ts";

export const login = async () : Promise<string | void> => {
  let isProcessEnding: boolean = false;
  do{
    console.clear();
    console.log("LogIn \n");

    const { username } = await prompt.ask([{
      name:"username",
      message:"Username: ",
      default:"jdoe"
    }]) as {username: string};

    const password : string = await prompt.secret("Password:");

    const response = users.login(username, password);

    if (response.status) return response.msj;
    else {
      console.clear();
      console.log(response.msj);
      isProcessEnding = !(await prompt.confirm(
        "Do you want to try to login again? (Y/N): "
      ));
    }

  }while(!isProcessEnding);
}

export const logOut = () : void => {
  console.log("Goodbye See you later");
  process.exit();
}

export const register = async () : Promise<void> => {
  let isProcessEnding: boolean = false;

  do{
    console.clear();
    console.log("Register a new user \n");
    console.log("Please respond the following questions:");
    const userData = (await prompt.ask([
      {
        name: "first_name",
        message: "First name: ",
        default: "John",
      },
      {
        name: "last_name",
        message: "Last name: ",
        default: "Doe",
      },
      {
        name: "username",
        message: "Username: ",
        default: "jdoe",
      },
    ]));
    const password = await prompt.secret("Password:");

    const response = users.registerUser(
      {...userData, password} as Omit<User, "id"|"loginAttempts">
    );

    if (response.status === false) {
      console.clear();
      console.log(response.msj);
      isProcessEnding = !(await prompt.confirm(
        "Do you want to try to register again? (Y/N): "
      ));
    }
    else isProcessEnding = true;

  }while(!isProcessEnding);
}