import {  NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent },
    {path: 'about', loadChildren:() => import('./components/about/about.module').then(m=>m.AboutModule)},
    {path: 'projects', loadChildren:() => import('./components/projects/projects.module').then(m=>m.ProjectsModule)},
    {path: 'technology', loadChildren: ()=> import('./components/technology/technology.module').then(m=>m.TechnologyModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
