import { Component } from '@angular/core';
import { ChevronType } from '../../vector/chevron-icon/chevron-icon.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-locale-list-box',
  templateUrl: './locale-list-box.component.html',
  styleUrls: ['./locale-list-box.component.css']
})
export class LocaleListBoxComponent {

  type = ChevronType.DOWN;
  isActive: boolean = false;
  localeStr: any = '한국어';

  constructor (private translateService: TranslateService) {

  }

  toggleType () {
    this.type = this.type === ChevronType.UP ? ChevronType.DOWN : ChevronType.UP;
    setTimeout(() => {this.isActive = !this.isActive;});
  }

  changeLocale (locale: string) {
    this.translateService.use(locale); // 언어 변경
    if (locale === 'ko') {
      this.localeStr = '한국어';
    } else if (locale === 'en') {
      this.localeStr = 'English';
    } else if (locale === 'ja') {
      this.localeStr = '日本語';
    }
    this.isActive = false;
  }
}
