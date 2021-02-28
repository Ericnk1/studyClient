import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SchoolService} from '../shared/services/school.service';
import {School} from '../shared/models/school';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'city', 'phone', 'button'];
  dataSource = null;

  displayedColumnsAll: string[] = ['id', 'name', 'city', 'phone', 'button'];
  dataSourceAll = null;

  schools: School[] = [];
  school: School;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private schoolService: SchoolService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.schoolService.getAllActiveSchools().subscribe(value => {
      this.schools = (value);
      // console.log(value);
      this.dataSource = new MatTableDataSource(this.schools);
      // console.log(this.dataSource);
      this.dataSource.sort = this.sort; });

    this.schoolService.getAllSchools().subscribe(value => {
      this.schools = (value);
      // console.log(value);
      this.dataSourceAll = new MatTableDataSource(this.schools);
      // console.log(this.dataSource);
      this.dataSourceAll.sort = this.sort; });

  }
  deleteSchool(id: number): void {
    this.schoolService.deleteSchoolById(id).subscribe(value => window.location.assign('school'));
  }
  fullyDeleteSchool(id: number): void {
    this.schoolService.fullyDeleteSchoolById(id).subscribe(value => window.location.assign('school'));
  }
  restoreSchool(id: number): void {
    this.schoolService.restoreSchool(id).subscribe(value => window.location.assign('school'));
  }
  update(school: School): void {
    this.router.navigate(['/update-course', school.id]);
  }

}
