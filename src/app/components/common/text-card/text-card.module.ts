import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCardComponent } from './text-card.component';



@NgModule({
  declarations: [
    TextCardComponent
  ],
  exports: [
    TextCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TextCardModule { }
