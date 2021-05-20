import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetRoutingModule } from './greet-routing.module';
import { GreetComponent } from './greet.component';


@NgModule({
  declarations: [
    GreetComponent
  ],
  imports: [
    CommonModule,
    GreetRoutingModule
  ]
})
export class GreetModule { }
