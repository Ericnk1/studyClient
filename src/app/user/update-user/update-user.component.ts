import { Component, OnInit } from '@angular/core';
import {Authority} from '../../shared/models/authority';
import {School} from '../../shared/models/school';
import {Course} from '../../shared/models/course';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../shared/services/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SignupService} from '../../shared/services/signup.service';
import {AuthorityService} from '../../shared/services/authority.service';
import {SchoolService} from '../../shared/services/school.service';
import {CourseService} from '../../shared/services/course.service';
import {User} from '../../shared/models/user';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;
  authorities: Authority[];
  schools: School[];
  courses: Course[];

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
  updateGroup: FormGroup;
  ngOnInit(): void {
    this.user.id = this.route.snapshot.params.id;
    this.authorityService.getAllAuthorities().subscribe(value => this.authorities = value);
    this.schoolService.getAllSchools().subscribe(value => this.schools = value);
    this.courseService.getAllCourses().subscribe(value => this.courses = value);
    this.userService.getUserById(this.user.id).subscribe(value => {
      this.user = value;
      console.log(value);
      this.updateGroup.setValue(this.user);
    });
    this.updateGroup = this.formBuilder.group({
      id: new FormControl(this.user.id, Validators.required),
      username: new FormControl(this.user.username, Validators.required),
      password: new FormControl(this.user.password, Validators.required),
      authority: new FormControl(this.user.authority),
      school: new FormControl(this.user.school),
      course: new FormControl(this.user.course)
    });
  }

  /*getUserById(id: any): void{
    this.userService.getUserById(id).subscribe((data: any) => {this.Id = data.id;
                                                               this.updateGroup.setValue({
        username: data.username,
        password: data.password,
        authority: data.authority,
        school: data.school,
        course: data.course
      });
    });
  }*/
  update(user: User): void{
    this.user = this.updateGroup.value;
    /*const user = new User(null, this.updateGroup.get('username').value,
    this.updateGroup.get('password').value, this.updateGroup.get('school').value,
    this.updateGroup.get('authority').value, this.updateGroup.get('course').value, null);
    console.log(user);*/
    console.log(this.user);
    this.userService.updateUser(user).subscribe(
      value => window.location.assign('/user'),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );

  }

  goBack(): void {
    this.router.navigate(['/user']);
  }
}
