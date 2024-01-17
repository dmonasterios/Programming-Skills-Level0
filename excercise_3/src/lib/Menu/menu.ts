import users from "../../utils/Users.ts";
import prompt from "../../utils/prompt.ts";
import { programs } from "../../types/types.ts";
import enrollProgram from "../Enroll/enrollProgram.ts";
import listEnrolledPrograms from "../Enroll/listEnrolledPrograms.ts";

type options = programs | "List Enrolled Programs" | "Log Out";
type menuOptions = "Enroll Program" | "List Enrolled Programs" | "Log Out";
type enrollOptions = programs | "Return";

export const printMenu = async (studentID: string): Promise<void> => {
  let isUserLogIn: boolean = true;
  const full_name = users.getUserName(studentID);

  do {
    console.clear();

    console.log("Blindma1den University Enrollment System");
    console.log(`Ẁelcome ${full_name} \n`);
    console.log("Menu: \n");
    let opt = await prompt.list<menuOptions>([
      "Enroll Program",
      "List Enrolled Programs",
      "Log Out",
    ]);

      opt === "Enroll Program"
      ? await selectProgram(studentID)
      : opt === "List Enrolled Programs"
      ? await listEnrolledPrograms(studentID)
      : (isUserLogIn = false);

  } while (isUserLogIn);
};

async function selectProgram(studentID: string) {
  let isProcessEnding: boolean = false;

  do{
    const full_name = users.getUserName(studentID);
    console.clear();
    console.log("Blindma1den University Enrollment System");
    console.log(`Ẁelcome ${full_name} \n`);
    console.log("Available Programs: \n");
    let opt = await prompt.list<enrollOptions>([
      "Computer Science",
      "Medicine",
      "Marketing",
      "Arts",
      "Return",
    ]);
    opt === "Return"?
    (isProcessEnding = true)
    : await enrollProgram(studentID, opt)
  }while(!isProcessEnding);
}
