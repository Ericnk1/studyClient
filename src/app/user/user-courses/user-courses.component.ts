import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../shared/models/user';
import {Course} from '../../shared/models/course';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {

  user: User;
  courses: Course[];

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user.id = this.route.snapshot.params.id;
    this.userService.getUserById(this.user.id).subscribe(value => {
      this.user = value;
      console.log(value);
      this.user.course = this.courses;
      console.log(this.courses);
    });
  }

  goBack(): void {
    this.router.navigate(['/user-list']);
  }

}
