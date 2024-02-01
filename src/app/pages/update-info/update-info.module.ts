import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateInfoComponent } from './update-info.component';



@NgModule({
  declarations: [
    UpdateInfoComponent
  ],
  exports: [
    UpdateInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UpdateInfoModule { }
