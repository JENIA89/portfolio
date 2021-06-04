import { NgModule } from "@angular/core";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";

@NgModule({
    imports:[ProjectsRoutingModule],
    declarations: [ProjectsComponent]
})

export class ProjectsModule {}