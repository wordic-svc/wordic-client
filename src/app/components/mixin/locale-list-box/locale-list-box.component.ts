import { Component, OnInit } from '@angular/core';
import { ChevronType } from '../../vector/chevron-icon/chevron-icon.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-locale-list-box',
  templateUrl: './locale-list-box.component.html',
  styleUrls: ['./locale-list-box.component.css']
})
export class LocaleListBoxComponent implements OnInit{

  type = ChevronType.DOWN;
  isActive: boolean = false;
  localeStr: any = '한국어';
  localeDisplayMap: any;

  constructor (private translateService: TranslateService) {

  }

  toggleType () {
    this.type = this.type === ChevronType.UP ? ChevronType.DOWN : ChevronType.UP;
    setTimeout(() => {this.isActive = !this.isActive;});
  }

  changeLocale (locale: string) {
    this.translateService.use(locale); // 언어 변경
    this.localeStr = localeDisplayMap[locale];
    this.isActive = false;
  }

  ngOnInit (): void {
    // map to list
    this.localeDisplayMap =
      Object.entries(localeDisplayMap)
              .map(([key, value]) => ({ key, value }));
  }
}

export const localeType = {
  KO: 'ko',
  EN: 'en',
  JA: 'ja'
}

export const localeDisplayMap = {
  [localeType.KO]: '한국어',
  [localeType.EN]: 'English',
  [localeType.JA]: '日本語'
}
