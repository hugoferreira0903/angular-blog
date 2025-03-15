import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { Content2Component } from './pages/content2/content2.component';

export const routes: Routes = [
  { path: '', component:HomeComponent},
  {path:'content', component:ContentComponent},
  {path:'content2', component:Content2Component}
];
