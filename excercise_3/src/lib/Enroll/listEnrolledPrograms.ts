import prompt from "../../utils/prompt.ts";
import programs from "../../utils/Program.ts"
import users  from "../../utils/Users.ts"
import {EnrolledPrograms} from "../../types/types.ts";



async function listEnrolledPrograms(userID: string): Promise<void>{
  console.clear();

  const enrolledPrograms = users.getEnrolledPrograms(userID);
  if(enrolledPrograms.length > 0){
    enrolledPrograms.map((program , index) => {
      const programName = programs.id[program.id.code];
      console.log(`${index + 1}.- Program:${programName}, City: ${program.city}`);
    });

  } else {
    console.log("You haven't enrolled in any program");
  }



  await prompt.pause();
}

export default listEnrolledPrograms