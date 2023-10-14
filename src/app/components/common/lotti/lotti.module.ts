import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottiComponent } from './lotti.component';
import { LottieComponent, LottieModule } from 'ngx-lottie';
import { playerFactory } from '../../../app.module';



@NgModule({
  declarations: [
    LottiComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieComponent
  ],
  exports: [
    LottiComponent,
    LottieModule
  ]
})
export class LottiModule { }
