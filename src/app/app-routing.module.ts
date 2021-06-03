import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologyComponent } from './components/technology/technology.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'about', loadChildren:() => import('./components/about/about.module').then(m=>m.AboutModule)},
  {path: 'projects', component: ProjectsComponent},
  {path: 'technology', component: TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
