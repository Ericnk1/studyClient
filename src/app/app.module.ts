import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AppInterceptor} from './shared/interceptor/app.interceptor';
import { SchoolComponent } from './school/school.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import { UserComponent } from './user/user.component';
import {MatSortModule} from '@angular/material/sort';
import { AuthorityComponent } from './authority/authority.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { AddSchoolComponent } from './school/add-school/add-school.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UpdateSchoolComponent } from './school/update-school/update-school.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import {MatCardModule} from '@angular/material/card';
import { AddUserComponent } from './user/add-user/add-user.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AgmCoreModule, MapsAPILoader} from '@agm/core';
import { UserCoursesComponent } from './user/user-courses/user-courses.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user', component: UserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: 'school', component: SchoolComponent},
  {path: 'add-school', component: AddSchoolComponent},
  {path: 'update-school/:id', component: UpdateSchoolComponent},
  {path: 'course', component: CourseComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'update-course/:id', component: UpdateCourseComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user-courses/:id', component: UserCoursesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SchoolComponent,
    HeaderComponent,
    FooterComponent,
    CourseComponent,
    ContactComponent,
    UserComponent,
    AuthorityComponent,
    AddCourseComponent,
    AddSchoolComponent,
    UpdateUserComponent,
    UpdateSchoolComponent,
    UpdateCourseComponent,
    AddUserComponent,
    UserCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    // MapsAPILoader,
    MatFormFieldModule,
    RouterModule.forChild(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSliderModule,
    FlexLayoutModule,
    MatSortModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [RouterModule, MatListModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
