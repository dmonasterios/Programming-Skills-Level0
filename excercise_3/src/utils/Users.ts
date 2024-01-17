import generateID from "./generateID.ts";
import { User as UserType, response, cities, EnrolledPrograms } from "../types/types.ts";

type Keys = keyof UserType;

type objectValue = {
  payloadKey : Keys,
  value: string | number
};

class Users{
  private users : UserType[] = [];

  constructor(){}

  getIndex(data : objectValue): number{
    const {payloadKey, value} = data;
    return this.users.findIndex((user:UserType) => user[ payloadKey as keyof UserType ] === value);
  }

  validateIfUserExits(_username: string): boolean{
    let index = this.getIndex({payloadKey:"username", value:_username});
    return index > -1 ? true : false;
  }

  registerUser(userData : Omit<UserType,"id"|"loginAttempts">): response{
    const isUsernameTaken = this.validateIfUserExits(userData.username);

    if(isUsernameTaken) return {
      status: false,
      msj:"The introduced username is not available."
    };

    const id = generateID('student');

    this.users.push({
      id,
      ...userData,
      loginAttempts: 0,
      enrolledPrograms:[]
    });

    return {
      status:true,
      msj:"New user registered successfully."
    };
  }

  login(username: string, password: string):response{
    let index = this.getIndex({payloadKey:"username", value:username});

    if(index < 0) return {
      status: false,
      msj: "Invalid Username or password."
    }

    if(this.users[index].loginAttempts >= 3) return {
      status: false,
      msj: "Your User is Blocked."
    }

    if(this.users[index].password === password){
      this.users[index].loginAttempts = 0;
      return {
        status: true,
        msj: this.users[index].id,
      }
    }

    this.users[index].loginAttempts++;

    return {
      status: false,
      msj: "Invalid Username or password."
    };
  }

  getUserName(userID: string){
    let index = this.getIndex({payloadKey:"id", value:userID});
    return`${this.users[index].first_name} ${this.users[index].last_name}`
  }

  getEnrolledPrograms(userID: string): EnrolledPrograms[]{
    let index = this.getIndex({payloadKey:"id", value:userID});
    return this.users[index].enrolledPrograms;
  }

  enrollProgram(userID: string, programID: string, city: cities ):void{
    let index = this.getIndex({payloadKey:"id", value:userID});
    this.users[index].enrolledPrograms.push({
      id:{
        type:"program",
        code: programID
      },
      city
    });
  }
}

const users = new Users();

export default users;