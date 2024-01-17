export type EnrolledPrograms =  {
  id:{
    type: 'student' | 'program',
    code: string
  },
  city: string
}

export type User = {
  id: string,
  first_name:string,
  last_name: string,
  username: string,
  password: string,
  loginAttempts: number,
  enrolledPrograms: EnrolledPrograms[]
}

export type response = {
  status: boolean,
  msj: string
}

export type programs = 'Computer Science' | 'Medicine' | 'Marketing' | 'Arts';

export type cities = 'london' | 'manchester' | 'liverpool';