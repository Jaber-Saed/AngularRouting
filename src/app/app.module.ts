import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CoursesComponent } from './component/courses/courses.component';
import { HomeComponent } from './component/home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';

const appRout: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'; },
  { path: 'Home', component: HomeComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'About', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRout)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
