import { AboutComponent } from './about.component';
import { NgModule } from "@angular/core";
import { AboutRoutingModule } from './about-routing.module';
import { NgParticlesModule } from 'ng-particles';

@NgModule({
    imports:[AboutRoutingModule,NgParticlesModule],
    declarations: [AboutComponent]
})

export class AboutModule {}