import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUseInputComponent } from './single-use-input.component';
import { ChevronIconModule } from '../../vector/chevron-icon/chevron-icon.module';
import { InputTextModule } from '../../common/input-text/input-text.module';
import { TranslateModule } from '@ngx-translate/core';
import { SearchIconModule } from '../../vector/search-icon/search-icon.module';
import { ColumIconModule } from '../../vector/colum-icon/colum-icon.module';
import { CopyIconModule } from '../../vector/copy-icon/copy-icon.module';



@NgModule({
  declarations: [
    SingleUseInputComponent
  ],
  exports: [
    SingleUseInputComponent
  ],
  imports: [
    CommonModule,
    ChevronIconModule,
    InputTextModule,
    TranslateModule,
    SearchIconModule,
    ColumIconModule,
    CopyIconModule
  ]
})
export class SingleUseInputModule { }
