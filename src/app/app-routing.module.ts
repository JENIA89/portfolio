import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'about', loadChildren:() => import('./components/about/about.module').then(m=>m.AboutModule)},
  {path: 'projects', loadChildren:() => import('./components/projects/projects.module').then(m=>m.ProjectsModule)},
  {path: 'technology', loadChildren: ()=> import('./components/technology/technology.module').then(m=>m.TechnologyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
