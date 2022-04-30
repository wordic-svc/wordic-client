import { Component, OnInit } from '@angular/core';
import { AlertModalService } from '../../components/modal/alert-modal/alert-modal.service';
import { AppSeoService, SeoData } from '../../seo/app-seo.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor (private appSeoService: AppSeoService) {
  }
  ngOnInit (): void {
    this.initData();
    const seoData: SeoData = {
      author: 'wordic',
      keywords: `한글 변수명, 영어 변수명, 컬럼명, 영문 약어, 영어약자, 변수 영어로, 변수 선언, 변수명 짓기, 컬럼명 짓기, 영문약어, 영어약자, 변수 영어로, 변수 선언, 2023년 공공데이터 표준, 2022년 공공데이터 표준, 2021년 공공데이터 표준`,
      lang: 'ko',
      title: `변수명 생성기 Wordic | 변수명 짓기 | 컬럼명 짓기 | 변수명 약어 | 컬럼명 약어 | 공공데이터 표준`,
      description: `한글명을 영문 축약어로 쉽게 만들 수 있습니다. 변수명, 컬럼명, 필드명, 영어 약어, 영문약어 등.`,
      site_name: '변수명 생성기 Wordic',
      site_url: environment.basePath + '/variable-name',
      src: environment.basePath + '/variable-name'
    }
    this.appSeoService.setSeoData(seoData)
  }
  async initData() {
  }

}
