import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CoursesComponent } from './component/courses/courses.component';
import { HomeComponent } from './component/home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';

const appRout: Routes = [
  {path:'' , component: HomeComponent},// in this case the url not be hom
  // { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'About', component: AboutComponent },
  { path:  '**', component: ErrorComponent},// This will must be the last rout bucones the pathe will be mathic any rout
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRout)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
