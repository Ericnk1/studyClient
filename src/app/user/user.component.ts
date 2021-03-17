import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {User} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userName', 'school', 'button'];
  dataSource = null;

  displayedColumnsAll: string[] = ['id', 'userName', 'school', 'button'];
  dataSourceAll = null;

  Id: number;
  user: User;
  users: User[] = [];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAllActiveUsers().subscribe(value => {
      this.users = (value);
      console.log(value);
      this.dataSource = new MatTableDataSource(this.users);
      console.log(this.dataSource);
      this.dataSource.sort = this.sort; });

    this.userService.getAllUsers().subscribe(value => {
      this.users = (value);
      console.log(value);
      this.dataSourceAll = new MatTableDataSource(this.users);
      console.log(this.dataSourceAll);
      this.dataSourceAll.sort = this.sort; });

  }
  update(user: User): void {
    this.router.navigate(['/update-user', user.id]);
  }
  deleteUser(id: number): void {
    this.userService.deleteUserById(id).subscribe(value => window.location.assign('user'));
  }
  restoreUser(id: number): void {
    this.userService.restoreUser(id).subscribe(value => window.location.assign('user'));
  }
  fullyDeleteUser(id: number): void {
    this.userService.fullyDeleteUserById(id).subscribe(value => window.location.assign('user'));
  }

  userCourses(user: User): void {
    this.router.navigate(['user', user.id]);
  }

}
