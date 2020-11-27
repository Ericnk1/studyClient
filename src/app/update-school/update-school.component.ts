import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../shared/services/school.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {School} from '../shared/models/school';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {

  constructor(private schoolService: SchoolService, private location: Location,
              private formBuilder: FormBuilder) { }
  updateSchoolGroup: FormGroup;

  ngOnInit(): void {
    this.updateSchoolGroup = this.formBuilder.group({
      name: '',
      city: '',
      phone: ''
    });
  }
  updateSchool(): void {
    const updateSchool = new School(null, this.updateSchoolGroup.get('name').value,
      this.updateSchoolGroup.get('city').value, this.updateSchoolGroup.get('phone').value, true);
    console.log(updateSchool);
    this.schoolService.addSchool(updateSchool).subscribe(value => window.location.assign('/school'));
  }

  goBack(): void {
    this.location.back();
  }

}
