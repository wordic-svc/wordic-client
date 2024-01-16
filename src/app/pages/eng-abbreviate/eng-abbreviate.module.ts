import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngAbbreviateComponent } from './eng-abbreviate.component';
import { SingleUseInputModule } from '../../components/mixin/single-use-input/single-use-input.module';
import { CopyIconModule } from '../../components/vector/copy-icon/copy-icon.module';
import { InputTextModule } from '../../components/common/input-text/input-text.module';
import { SearchIconModule } from '../../components/vector/search-icon/search-icon.module';
import { UpdateInfoModule } from '../update-info/update-info.module';



@NgModule({
  declarations: [
    EngAbbreviateComponent
  ],
  imports: [
    CommonModule,
    SingleUseInputModule,
    CopyIconModule,
    InputTextModule,
    SearchIconModule,
    UpdateInfoModule
  ],
  exports: [
    EngAbbreviateComponent
  ]
})
export class EngAbbreviateModule { }
