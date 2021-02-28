import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdateCourseComponent } from './update-course.component';

describe('UpdateCourseComponent', () => {
  let component: UpdateCourseComponent;
  let fixture: ComponentFixture<UpdateCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
