import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oh-my-baby';
  constructor(private translateService: TranslateService) {
    // 초기 언어 설정
    translateService.setDefaultLang('ko'); // 한국어로 설정
    // 번역된 문자열 가져오기
    this.translateService.use('ko'); // 언어 변경
    const translatedText = this.translateService.instant('Helloworld');
    console.log(translatedText); // 번역된 문자열 출력
  }

  // 다른 로캘로 변경하는 함수
  switchLocale(locale: string) {
    this.translateService.use(locale);
  }
}
