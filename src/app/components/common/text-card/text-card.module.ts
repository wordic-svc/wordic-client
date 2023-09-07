import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCardComponent } from './text-card.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    TextCardComponent
  ],
  exports: [
    TextCardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class TextCardModule { }
