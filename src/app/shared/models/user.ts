import {School} from './school';
import {Course} from './course';

export class User {
  id: number;
  username: string;
  password: string;
  school: School;
  authority: string;
  course: Course[];
  isActive: boolean;

  constructor(id: number, username: string, password: string, school: School, authority: string, course: Course[], isActive: boolean) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.school = school;
    this.authority = authority;
    this.course = course;
    this.isActive = isActive;
  }
}
