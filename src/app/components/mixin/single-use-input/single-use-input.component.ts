import { ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LottiService } from '../../common/lotti/lotti.service';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { Clipboard } from '@angular/cdk/clipboard';
import { ChevronType } from '../../vector/chevron-icon/chevron-icon.component';
import { ToastService } from '../../common/toast/toast.service';
import { SingleUseInputService } from './single-use-input.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-use-input',
  templateUrl: './single-use-input.component.html',
  styleUrls: ['./single-use-input.component.css']
})
export class SingleUseInputComponent implements OnInit{
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '변환하기';
  abbreviation: boolean = false;

  platformId: string = '';

  resultData: ResultAttrive = {
    info: {
      kebab_case: 'registration-datetime',
      camel_case: 'registrationDatetime',
      snake_case_l: 'REGISTRATION_DATETIME',
      snake_case_s: 'registration_datetime',
      pascal_case: 'RegistrationDatetime',
      combined_text: []
    },
    papago: {
      kebab_case: 'registration-datetime',
      camel_case: 'registrationDatetime',
      snake_case_l: 'REGISTRATION_DATETIME',
      snake_case_s: 'registration_datetime',
      pascal_case: 'RegistrationDatetime',
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
        "eng_text": "datetime",
        "attrive_text": "dt",
        "pos": "1",
        "code": "일반 명사"
      }
      ]
  };
  inputValue: any = '';

  constructor(private httpClient: HttpClient,
              private lotteSvc: LottiService,
              private clipboard: Clipboard,
              private router: Router,
              @Inject(PLATFORM_ID) platformId: string,
              private singleUseInputService: SingleUseInputService,
              private toastService: ToastService,
              private activeRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params: any) => {
      this.inputValue = params.keyword;
      this.onSearch(params.keyword);
    })
      // this.singleUseInputService.onSearch.subscribe(p => {
      // })
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
    // this.singleUseInputService.onSearch.emit(event.target.value);
    this.router.navigate(['/variable-name'], { queryParams: { keyword: event.target.value } });
  }

  onClick ($event: any) {
    if ($event.value == null) {
      alert('값을 입력해주세요');
      return;
    }
    this.router.navigate(['/variable-name'], { queryParams: { keyword: $event.value } });
  }
  async onSearch(value: string) {
    try {
      this.lotteSvc.toggle.emit(true);
      if(isPlatformBrowser(this.platformId)) {
        const param = {
          'name': value,
          'abbri': this.abbreviation
        }
        await this.httpClient.get(environment.apiUrl + '/input/'+value).toPromise();
        const res: any = await this.httpClient.post(environment.apiUrl + '/text2', param).toPromise();
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

  onChange ($event: boolean) {
    this.abbreviation = $event;
  }

  copyClipboard (kebab_case: string) {
    this.clipboard.copy(kebab_case);
    this.toastService.showToast(`${kebab_case} 복사되었습니다.`);

  }
}

interface ResultAttrive {
  info: ResultInfo;
  papago: ResultInfo;
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
