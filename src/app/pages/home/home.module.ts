import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../layout/header/header.module';
import { TextCardModule } from '../../components/common/text-card/text-card.module';
import { LargeUseCardModule } from '../../components/common/large-use-card/large-use-card.module';
import { ImageUploaderModule } from '../../components/common/image-uploader/image-uploader.module';
import { DatePickerModule } from '../../components/common/date-picker/date-picker.module';
import { AdBannerModule } from '../../components/common/ad-banner/ad-banner.module';
import { LargeUseInputModule } from '../../components/mixin/large-use-input/large-use-input.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TextCardModule,
    LargeUseCardModule,
    ImageUploaderModule,
    DatePickerModule,
    AdBannerModule,
    LargeUseInputModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
