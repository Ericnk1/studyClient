import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../shared/services/course.service';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Course} from '../../shared/models/course';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  course: Course;

  constructor(private courseService: CourseService, private location: Location, private router: Router,
              private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.course = {} as Course;
  }
  updateCourseGroup: FormGroup;

  ngOnInit(): void {
    this.course.id = this.route.snapshot.params.id;
    console.log(this.course.id);
    this.courseService.getCourseById(this.course.id).subscribe(course => {
      this.course = course;
      console.log(this.course);
      this.updateCourseGroup.setValue(this.course);
    });
    this.updateCourseGroup = this.formBuilder.group({
      id: new FormControl(this.course.id, Validators.required),
      name: new  FormControl(this.course.name, Validators.required),
      durationHours: new FormControl(this.course.durationHours, Validators.required),
    });
  }
  updateCourse(course: Course): void {
    course = this.updateCourseGroup.value;
    /*const updateCourse = new Course(null, this.updateCourseGroup.get('name').value,
      this.updateCourseGroup.get('duration').value, null);*/
    console.log(course);
    this.courseService.updateCourse(course).subscribe(value => window.location.assign('/course'));
  }

  goBack(): void {
    this.router.navigate(['/course']);
  }

}
