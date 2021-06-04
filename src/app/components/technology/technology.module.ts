import { TechnologyRoutingModule } from './technology-routing.module';
import { NgModule } from "@angular/core";
import { TechnologyComponent } from "./technology.component";

@NgModule({
    imports:[TechnologyRoutingModule,],
    declarations:[TechnologyComponent]
})

export class TechnologyModule {}