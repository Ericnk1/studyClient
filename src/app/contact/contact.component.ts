import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  google: any;
  lat = 59.436962;
  lng = 24.753574;

  constructor() { }

  ngOnInit(): void {
  }

}
