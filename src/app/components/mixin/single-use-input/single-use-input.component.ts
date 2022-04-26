import { ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LottiService } from '../../common/lotti/lotti.service';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ChevronType } from '../../vector/chevron-icon/chevron-icon.component';

@Component({
  selector: 'app-single-use-input',
  templateUrl: './single-use-input.component.html',
  styleUrls: ['./single-use-input.component.css']
})
export class SingleUseInputComponent {
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '변환하기';

  platformId: string = '';

  resultData: ResultAttrive = {
    info: {
      kebab_case: 'rgst-dt',
      camel_case: 'rgstDt',
      snake_case_l: 'RGST_DT',
      snake_case_s: 'rgst_dt',
      pascal_case: 'RgstDt',
      combined_text: []
    },
    words: [
      {
        "kor_text": "등록",
        "eng_text": "registration",
        "attrive_text": "rgst",
        "pos": "0",
        "code": "일반 명사"
      },
      {
        "kor_text": "일시",
        "eng_text": "date",
        "attrive_text": "dt",
        "pos": "1",
        "code": "일반 명사"
      }
      ]
  };

  constructor(private httpClient: HttpClient,
              private lotteSvc: LottiService,
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
        const res: any = await this.httpClient.get(environment.apiUrl + '/text2/' + value).toPromise();
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
