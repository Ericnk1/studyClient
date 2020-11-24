import { Component, OnInit } from '@angular/core';
import {CourseService} from '../shared/services/course.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Course} from '../shared/models/course';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  constructor(private courseService: CourseService, private location: Location,
              private formBuilder: FormBuilder) { }
  updateCourseGroup: FormGroup;

  ngOnInit(): void {
    this.updateCourseGroup = this.formBuilder.group({
      name: '',
      duration: ''
    });
  }
  updateCourse(): void {
    const updateCourse = new Course(null, this.updateCourseGroup.get('name').value,
      this.updateCourseGroup.get('duration').value, null);
    console.log(updateCourse);
    this.courseService.updateCourse(updateCourse).subscribe(value => window.location.assign('/course'));
  }

  goBack(): void {
    this.location.back();
  }

}
