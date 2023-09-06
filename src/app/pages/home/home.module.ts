import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../layout/header/header.module';
import { TextCardModule } from '../../components/common/text-card/text-card.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TextCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
