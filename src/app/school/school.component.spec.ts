import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchoolComponent } from './school.component';

describe('SchoolComponent', () => {
  let component: SchoolComponent;
  let fixture: ComponentFixture<SchoolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
