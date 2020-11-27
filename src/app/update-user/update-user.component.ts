import { Component, OnInit } from '@angular/core';
import {Authority} from '../shared/models/authority';
import {School} from '../shared/models/school';
import {Course} from '../shared/models/course';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../shared/services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SignupService} from '../shared/services/signup.service';
import {AuthorityService} from '../shared/services/authority.service';
import {SchoolService} from '../shared/services/school.service';
import {CourseService} from '../shared/services/course.service';
import {User} from '../shared/models/user';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  Id: number;
  user: User;
  authorities: Authority[];
  schools: School[];
  courses: Course[];

  constructor(private snackbar: MatSnackBar,
              private location: Location,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private signupService: SignupService,
              private authorityService: AuthorityService,
              private schoolService: SchoolService,
              private courseService: CourseService) { }
  updateGroup: FormGroup;
  ngOnInit(): void {
    this.authorityService.getAllAuthorities().subscribe(value => this.authorities = value);
    this.schoolService.getAllSchools().subscribe(value => this.schools = value);
    this.courseService.getAllCourses().subscribe(value => this.courses = value);
    // this.userService.getUserById(this.user.id).subscribe(value => this.user = value);
    this.updateGroup = this.formBuilder.group({
      username: '',
      password: '',
      authority: '',
      school: '',
      course: ''
    });
  }

  getUserById(id: any): void{
    this.userService.getUserById(id).subscribe((data: any) => {this.Id = data.id;
                                                               this.updateGroup.setValue({
        username: data.username,
        password: data.password,
        authority: data.authority,
        school: data.school,
        course: data.course
      });
    });
  }
  update(): void{
    // tslint:disable-next-line:max-line-length
    /*const user = new User(null, this.updateGroup.get('username').value, this.updateGroup.get('password').value, this.updateGroup.get('authority').value, this.updateGroup.get('school').value, this.updateGroup.get('course').value);
    console.log(user);*/
    console.log(this.user);
    this.userService.updateUser(this.updateGroup.value).subscribe(
      value => window.location.assign('/user')/*,
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }*/
    );

  }

  goBack(): void {
    this.location.back();
  }
}
