import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseConvertComponent } from './case-convert.component';
import { InputTextModule } from '../../components/common/input-text/input-text.module';
import { SearchIconModule } from '../../components/vector/search-icon/search-icon.module';
import { CopyIconModule } from '../../components/vector/copy-icon/copy-icon.module';
import { UpdateInfoModule } from '../update-info/update-info.module';



@NgModule({
  declarations: [
    CaseConvertComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    SearchIconModule,
    CopyIconModule,
    UpdateInfoModule
  ]
})
export class CaseConvertModule { }
