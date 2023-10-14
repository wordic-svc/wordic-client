import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeUseInputComponent } from './large-use-input.component';
import { RightArrowIconModule } from '../../vector/right-arrow-icon/right-arrow-icon.module';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from '../../common/input-text/input-text.module';
import { ChevronIconModule } from '../../vector/chevron-icon/chevron-icon.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LargeUseInputComponent
  ],
  exports: [
    LargeUseInputComponent
  ],
  imports: [
    CommonModule,
    RightArrowIconModule,
    TranslateModule,
    InputTextModule,
    ChevronIconModule,
    FormsModule
  ]
})
export class LargeUseInputModule { }
