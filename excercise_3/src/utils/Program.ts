import generateID from "./generateID.ts";
import { response, EnrolledPrograms } from "../types/types.ts"
import { cities } from "../types/types.ts";

class Program{
  private id: string;
  private name : string;
  private slots = {
    'london':1,
    'manchester':3,
    'liverpool':1
  };
  private enrolledPrograms : EnrolledPrograms[] = [];

  constructor(_name: string){
    this.id = generateID('program');
    this.name = _name;
  }

  getID(): string{
    return this.id;
  }

  getAvailableSlots(): cities[]{
    const options : cities[] = [];

    this.slots.liverpool > 0 ?  options.push("liverpool"): false;
    this.slots.london > 0 ?  options.push("london"): false;
    this.slots.manchester > 0 ?  options.push("manchester"): false;

    return options;
  }

  enrollStudent(studentID: string ,city: cities): response{
    if(this.slots[city] <= 0) return {
      status: false,
      msj:`There aren't available slots for ${this.name} program in ${city}.`
    }

    this.slots[city] --;
    this.enrolledPrograms.push({
      id:{
        type:'student',
        code: studentID
      },
      city
    });
    return {
      status:true,
      msj:`Successful registration. Now you're part of ${this.name} program`
    }
  }
}

const programs = {
  'Computer Science': new Program('Computer Science'),
  'Medicine': new Program('Medicine'),
  'Marketing': new Program('Marketing'),
  'Arts': new Program('Arts'),
}

const id = {
  [programs['Computer Science'].getID()]:'Computer Science',
  [programs['Medicine'].getID()]:'Medicine',
  [programs['Marketing'].getID()]:'Marketing',
  [programs['Arts'].getID()]:'Arts'
}



export default {
  ...programs,
  id
};