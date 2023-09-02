import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerComponent } from './hamburger.component';
import { MenuIconModule } from '../../vector/menu-icon/menu-icon.module';



@NgModule({
  declarations: [
    HamburgerComponent
  ],
  imports: [
    CommonModule,
    MenuIconModule
  ],
  exports: [
    HamburgerComponent
  ]
})
export class HamburgerModule { }
