import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ProfileMenuModule } from '../../components/mixin/profile-menu/profile-menu.module';
import { HamburgerModule } from '../../components/mixin/hamburger/hamburger.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProfileMenuModule,
    HamburgerModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
