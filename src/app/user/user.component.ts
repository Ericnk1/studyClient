import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userName', 'school', 'course', 'button'];

  users: User[] = [];
  dataSource = null;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => {
      this.users = (value);
      console.log(value);
      this.dataSource = new MatTableDataSource(this.users);
      console.log(this.dataSource);
      this.dataSource.sort = this.sort; });

  }

}
