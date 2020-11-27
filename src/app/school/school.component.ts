import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SchoolService} from '../shared/services/school.service';
import {School} from '../shared/models/school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'city', 'phone', 'button'];

  schools: School[] = [];
  dataSource = null;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.schoolService.getAllSchools().subscribe(value => {
      this.schools = (value);
      // console.log(value);
      this.dataSource = new MatTableDataSource(this.schools);
      // console.log(this.dataSource);
      this.dataSource.sort = this.sort; });

  }
  deleteSchool(id: number): void {
    this.schoolService.deleteSchoolById(id).subscribe(value => window.location.assign('school'));
  }
  restoreSchool(id: number): void {
    this.schoolService.restoreSchool(id).subscribe(value => window.location.assign('school'));
  }

}
