import programs from "../../utils/Program.ts"
import users  from "../../utils/Users.ts"
import {programs as programsType, cities} from "../../types/types.ts";
import prompt from "../../utils/prompt.ts";


const enrollProgram = async (studentID: string ,program: programsType): Promise<void> => {
  console.clear();
  console.log(`Enroll ${program} program`);
  let city = await prompt.list<cities>(['london', 'manchester', 'liverpool']);
  let response = programs[program].enrollStudent(studentID, city);

  if(response.status === false){
    console.clear();
    console.log(response.msj);
    const options =  programs[program].getAvailableSlots();

    if(await prompt.confirm('Do you want to enroll in another city? (Y/N): ')){
      city = await prompt.list<cities>(options);
      response = programs[program].enrollStudent(studentID, city);
    }
  }

  if(response.status){
    const programID = programs[program].getID();
    users.enrollProgram(studentID, programID, city);
    console.log(response.msj);

    await prompt.pause();
  }
}

export default enrollProgram;