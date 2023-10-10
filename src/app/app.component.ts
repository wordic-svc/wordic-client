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
    if (this.testBrowser) {
      //avoid server NETWORK error
      this.data = this.http.get('/api');
    }
    const seoData = {
      title: 'Wordic - 한글 컬럼명을 영어 스네이크 표현식으로 변환',
      site_name: 'Wordic - 데이터베이스 스키마 표준화 도구',
      description: 'Wordic은 데이터베이스 컬럼명을 한글로 작성하고 이를 일관성 있는 영어 스네이크 표현식으로 변환해주는 도구입니다. 데이터베이스 관리의 새로운 표준을 경험하세요.',
      src: 'http://loeaf.com/assets/static/img/open_graph.png', // 이미지 경로를 여기에 넣으십시오.
      author: 'Wordic',
      keywords:
        "데이터베이스 외부 이름, 한글, 영어 스네이크, 일관성, 데이터 관리, 데이터 분석, 데이터베이스 일관성, 쿼리 작업, 사용자 정의 규칙, 인터페이스, 데이터 관리자, 데이터분석가, 소프트웨어 개발자, 일관성을 유지하다, 데이터베이스에 포함"
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

