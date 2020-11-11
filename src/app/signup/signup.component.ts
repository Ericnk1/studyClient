import { Component, OnInit } from '@angular/core';
import {Signup} from '../shared/models/singup';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SignupService} from '../shared/services/signup.service';
import {User} from '../shared/models/user';
import {Authority} from '../shared/models/authority';
import {AuthorityService} from '../shared/services/authority.service';
import {School} from '../shared/models/school';
import {Course} from '../shared/models/course';
import {SchoolService} from '../shared/services/school.service';
import {CourseService} from '../shared/services/course.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authorities: Authority[];
  schools: School[];
  courses: Course[];

  constructor(private snackbar: MatSnackBar,
              private formBuilder: FormBuilder,
              private signupService: SignupService,
              private authorityService: AuthorityService,
              private schoolService: SchoolService,
              private courseService: CourseService) { }
  signupGroup: FormGroup;
  ngOnInit(): void {
    this.authorityService.getAllAuthorities().subscribe(value => this.authorities = value);
    this.schoolService.getAllSchools().subscribe(value => this.schools = value);
    this.courseService.getAllCourses().subscribe(value => this.courses = value);
    this.signupGroup = this.formBuilder.group({
      username: '',
      password: '',
      authority: '',
      school: '',
      course: ''
    });
  }
  signup(): void{
    const user = new User(0, this.signupGroup.get('username').value, this.signupGroup.get('password').value, this.signupGroup.get('authority').value, this.signupGroup.get('school').value, this.signupGroup.get('course').value);
    this.signupService.validateSignup(user).subscribe(
      value => window.location.assign('/home'),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );

  }

}
