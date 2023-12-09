import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';

const routes: Routes = [
  { path: '',  redirectTo: '/variable-name', pathMatch: 'full' },
  { path: 'variable-name', component: HomeComponent},
  { path: 'intro', component: IntroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
