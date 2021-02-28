import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../shared/services/course.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Course} from '../../shared/models/course';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  course: Course;

  constructor(private courseService: CourseService, private location: Location,
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
    });
    this.updateCourseGroup = this.formBuilder.group({
      id: this.course.id,
      name: this.course.name,
      duration: this.course.durationHours,
    });
  }
  updateCourse(course: Course): void {
    this.course = this.updateCourseGroup.value;
    /*const updateCourse = new Course(null, this.updateCourseGroup.get('name').value,
      this.updateCourseGroup.get('duration').value, null);*/
    console.log(course);
    this.courseService.updateCourse(course).subscribe(value => window.location.assign('/course'));
  }

  goBack(): void {
    this.location.back();
  }

}
