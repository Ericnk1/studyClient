import { Component, OnInit } from '@angular/core';
import {Authority} from '../../shared/models/authority';
import {School} from '../../shared/models/school';
import {Course} from '../../shared/models/course';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../shared/services/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SignupService} from '../../shared/services/signup.service';
import {AuthorityService} from '../../shared/services/authority.service';
import {SchoolService} from '../../shared/services/school.service';
import {CourseService} from '../../shared/services/course.service';
import {User} from '../../shared/models/user';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  authorities: Authority[];
  schools: School[];
  courses: Course[];
  user: User;

  constructor(private snackbar: MatSnackBar,
              private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private signupService: SignupService,
              private authorityService: AuthorityService,
              private schoolService: SchoolService,
              private courseService: CourseService) {
    this.user = {} as User;
  }
  addUserGroup: FormGroup;
  ngOnInit(): void {
    this.authorityService.getAllAuthorities().subscribe(value => this.authorities = value);
    this.schoolService.getAllActiveSchools().subscribe(value => this.schools = value);
    this.courseService.getAllActiveCourses().subscribe(value => this.courses = value);
    this.addUserGroup = this.formBuilder.group({
      id: null,
      username: '',
      password: '',
      school: '',
      authority: '',
      course: ''
    });
  }
  addUser(): void{
    const addUser = new User(null, this.addUserGroup.get('username').value, this.addUserGroup.get('password').value,
      this.addUserGroup.get('school').value, this.addUserGroup.get('authority').value,
      this.addUserGroup.get('course').value._items, null);
    console.log(addUser);
    this.userService.addUser(addUser).subscribe(
      value => window.location.assign('/user')
    );

  }
  goBack(): void {
    this.router.navigate(['/user']);
  }

}
