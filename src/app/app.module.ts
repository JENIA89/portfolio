import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgParticlesModule } from 'ng-particles';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './components/greet/greet.component';

@NgModule({
  declarations: [
    AppComponent,  
    GreetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
