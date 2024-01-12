import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { EngAbbreviateComponent } from './pages/eng-abbreviate/eng-abbreviate.component';
import { CaseConvertComponent } from './pages/case-convert/case-convert.component';

const routes: Routes = [
  { path: '',  redirectTo: '/variable-name', pathMatch: 'full' },
  { path: 'variable-name', component: HomeComponent},
  { path: 'eng-abbreviate', component: EngAbbreviateComponent},
  { path: 'case-convert', component: CaseConvertComponent},
  { path: 'intro', component: IntroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
