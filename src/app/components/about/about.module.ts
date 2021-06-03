import { AboutComponent } from './about.component';
import { NgModule } from "@angular/core";
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    imports:[AboutRoutingModule],
    declarations: [AboutComponent]
})

export class AboutModule {}