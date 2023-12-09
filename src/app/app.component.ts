import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { AppSeoService } from './seo/app-seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wordic';
  public testBrowser  : boolean | undefined;
  public data         : any;

  constructor(private translateService: TranslateService,
              private http: HttpClient, @Inject(PLATFORM_ID) platformId: string,
              private appSeoService: AppSeoService) {
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

  ngOnInit (): void {
      const seoData = {
      title: '한글을 쉽게 변수명, 컬럼명, 영문약어로 변환 | Wordic',
      site_name: '변수명, 컬럼명, 영문약어 만들기 | Wordic',
      description: 'Wordic은 변수명, 컬럼명, 영문 약어명을 쉽게 변경함으로써 일관성 있는 영어 스네이크 표현식으로 변환해주는 도구입니다.',
      src: 'https://loeaf.com/assets/static/img/open_graph.png', // 이미지 경로를 여기에 넣으십시오.
      author: 'Wordic',
      keywords:
        "변수명 짓기, 컬럼명 짓기, 영문약어, 영어약자, 변수 영어로, 변수 선언",
      site_url: 'https://wordic.loeaf.com',
      lang: 'ko'
    };
    this.appSeoService.setSeoData(seoData)
  }
  options: AnimationOptions = {
    path: './assets/animation.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


}

