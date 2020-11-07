import {School} from './school';
import {Course} from './course';

export class User {
  id: number;
  username: string;
  password: string;
  school: School;
  course: Course[];

  constructor(id: number, username: string, password: string, school: School, course: Course[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.school = school;
    this.course = course;
  }
}
