import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './components/greet/greet.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologyComponent } from './components/technology/technology.component';

@NgModule({
  declarations: [
    AppComponent,  
    GreetComponent,
    ProjectsComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
