import {School} from './school';
import {Course} from './course';

export class User {
  id: number;
  username: string;
  password: string;
  authority: string;
  school: School;
  course: Course[];
  isActive: boolean;

  constructor(id: number, username: string, password: string, authority: string, school: School, course: Course[], isActive: boolean) {
    this.id = id;
    this.username = username;
    this.authority = authority;
    this.password = password;
    this.school = school;
    this.course = course;
    this.isActive = isActive;
  }
}
