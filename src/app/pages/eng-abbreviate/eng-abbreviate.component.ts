import { ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LottiService } from '../../components/common/lotti/lotti.service';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AppSeoService, SeoData } from '../../seo/app-seo.service';

@Component({
  selector: 'app-eng-abbreviate',
  templateUrl: './eng-abbreviate.component.html',
  styleUrls: ['./eng-abbreviate.component.css']
})
export class EngAbbreviateComponent implements OnInit{
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '변환하기';
  platformId: string = '';
  /**
   * RDT	3
   *       RgDT	4
   *       RgsDT	5
   *       RgstDT	6
   *       RgstDtT	7
   *       RgstDtTm	8
   *       RegstDtTm	9
   *       RegistDtTm	10
   */
  resultData: any = [{
    'text': 'RgDT',
    'length': 4
  }, {
    'text': 'RgsDT',
    'length': 5
  }, {
    'text': 'RgstDT',
    'length': 6
  }, {
    'text': 'RgstDtT',
    'length': 7
  }, {
    'text': 'RgstDtTm',
    'length': 8
  }, {
    'text': 'RegstDtTm',
    'length': 9
  }, {
    'text': 'RegistDtTm',
    'length': 10
  }];

  constructor(private httpClient: HttpClient,
              private lotteSvc: LottiService,
              private appSeoService: AppSeoService,
              @Inject(PLATFORM_ID) platformId: string,
              private cdr: ChangeDetectorRef) {
    this.platformId = platformId;
  }

  inputFields = [
    { label: '', placeholder: '등록일시', name: 'RGST_DT', value: '' },
    { label: '', placeholder: '아이디', name: 'ID', value: '' },
    { label: '', placeholder: '테이블속성구분', name: 'TBL_PRPR_DVSN', value: '' },
    { label: '', placeholder: '데이터사용여부', name: 'DT_USE_YN', value: '' },
    { label: '', placeholder: '회원번호', name: 'MBR_NO', value: '' },
    { label: '', placeholder: '성별구분', name: 'CSTL_DVSN', value: '' },
    { label: '', placeholder: '폰트명', name: 'FONT_NAME', value: '' },
    { label: '', placeholder: '트랜드명', name: 'TREND_NAME', value: '' }
    // Add more fields here if needed
  ];
  onEnterPressed(event: any) {
    this.onSearch(event.target.value);
  }

  onClick ($event: any) {
    if ($event.value == null) {
      alert('값을 입력해주세요');
      return;
    }
    this.onSearch($event.value);
  }
  async onSearch(value: string) {
    try {
      this.lotteSvc.toggle.emit(true);
      if(isPlatformBrowser(this.platformId)) {
        const res: any = await this.httpClient.get(environment.apiUrl + '/eng/' + value).toPromise();
        this.resultData = res.result;
      }
    } catch (error) {
      this.lotteSvc.toggle.emit(false);
    } finally {
      this.lotteSvc.toggle.emit(false);
    }
  }


  onValueChange ($event: any) {

  }

  ngOnInit (): void {
    const seoData: SeoData = {
      author: 'wordic',
      keywords: `영어 변수명, 영어약자, 변수 영어로, 컬럼명, 영문 약어, 한글 변수명 변수 선언, 변수명 짓기, 컬럼명 짓기, 영문약어, 영어약자, 변수 영어로, 변수 선언`,
      lang: 'ko',
      title: `영문 축약어 Wordic | 영어 축약어 | 영어 변수명 짓기 | 컬럼명 짓기 | 변수명 약어 | 컬럼명 약어`,
      description: `영문명을 영문 축약어로 쉽게 만들 수 있습니다. 변수명, 컬럼명, 필드명, 영어 약어, 영문약어 등.`,
      site_name: '영문 축약어 Wordic',
      site_url: environment.basePath + '/eng-abbreviate',
      src: environment.basePath + '/eng-abbreviate'
    }
    this.appSeoService.setMainSeoData(seoData)
  }
}

interface ResultAttrive {
  info: ResultInfo;
  words: ResultWord[];
}
interface ResultInfo {
  kebab_case: string;
  camel_case: string;
  snake_case_l: string;
  snake_case_s: string;
  pascal_case: string;
  combined_text: string[];
}
interface ResultWord {
  kor_text: string;
  eng_text: string;
  attrive_text: string;
  pos: string;
  code: string;
}
