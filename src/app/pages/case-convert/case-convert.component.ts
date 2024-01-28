import { ChangeDetectorRef, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LottiService } from '../../components/common/lotti/lotti.service';
import { AppSeoService, SeoData } from '../../seo/app-seo.service';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { Clipboard } from '@angular/cdk/clipboard';
import { ToastService } from '../../components/common/toast/toast.service';

@Component({
  selector: 'app-case-convert',
  templateUrl: './case-convert.component.html',
  styleUrls: ['./case-convert.component.css']
})
export class CaseConvertComponent implements OnInit{
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '변환하기';
  platformId: string = '';
  resultData: any = [{
    'text': 'RgstDt',
    'type': '파스칼 표기법'
  }, {
    'text': 'rgstDt',
    'type': '카멜 표기법'
  }, {
    'text': 'RGST_DT',
    'type': '스네이크 표기법(대)'
  }, {
    'text': 'rgst_dt',
    'type': '스네이크 표기법(소)'
  }, {
    'text': 'rgst-dt',
    'type': '하이픈 표기법'
  }, {
    'text': 'rgst dt',
    'type': '띄어쓰기 표기법'
  }];

  constructor(private httpClient: HttpClient,
              private lotteSvc: LottiService,
              private appSeoService: AppSeoService,
              private clipboard: Clipboard,
              private toastService: ToastService,
              @Inject(PLATFORM_ID) platformId: string,
              private cdr: ChangeDetectorRef) {
    this.platformId = platformId;
  }
  onEnterPressed(event: any) {
    const defaultCase = this.splitAndNormalize(event.target.value);
    if (defaultCase.length > 0) {
      this.resultData = this.convertCases(defaultCase);
    } else {
      alert('지원하지 않는 형식입니다.');
      this.resultData = [];
    }
  }

  defaultCase (input: string) {
    const result = input.includes('-');
    if (result) {
      return input.toLowerCase().split('-');
    } else {
      return [];
    }
  }

  // check snake case
  isSnakeCase (input: string) {
    const result = input.includes('_');
    if (result) {
      return input.toLowerCase().split('_');
    }
    return [];
  }

  isCamelCase(input: string) {
    // 카멜케이스인지 확인하기 위한 정규표현식: 소문자로 시작하고, 바로 뒤에 대문자가 올 수 있으며, 그 뒤에는 소문자나 숫자가 올 수 있습니다.
    const camelCaseRegex = /^[a-z]+([A-Z][a-z0-9]*)*$/;

    // 카멜케이스 형식인지 검사합니다.
    const result = camelCaseRegex.test(input);
    if (result) {
      // 카멜케이스 문자열을 단어로 분리합니다.
      // 대문자 앞에 공백을 추가하고, 공백을 기준으로 문자열을 분리합니다.
      return input
        // 대문자 앞에 공백 추가하기
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        // 공백을 기준으로 문자열 분리
        .split(' ').map((word) => word.toLowerCase());
    }
    return [];
  }

  isPascalCase(input: string) {
    // PascalCase를 확인하기 위한 정규표현식: 대문자로 시작하고, 그 뒤에는 소문자나 숫자가 올 수 있습니다.
    const pascalCaseRegex = /^[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]*)*$/;

    // PascalCase 형식인지 검사합니다.
    const result =  pascalCaseRegex.test(input);

    // PascalCase 문자열을 단어로 분리합니다.
    // 대문자 앞에 공백을 추가하고, 공백을 기준으로 문자열을 분리합니다.
    // 첫 번째 문자는 이미 대문자이므로 분리를 유지합니다.
    if (result) {
      return input
        // 두 번째 대문자부터 앞에 공백 추가하기
        .replace(/([A-Z][a-z0-9]*)/g, ' $1')
        .trim()
        .split(' ').map((word) => word.toLowerCase());
    } else {
      return []
    }
  }

  isSpaceCase(input: string) {
    const result = input.includes(' ');
    if (result) {
      return input.toLowerCase().split(' ');
    } else {
      return [];
    }
  }
  splitAndNormalize(input: string) {
    // '-', ' ', '_', 대문자를 기준으로 문자열을 분리합니다.
    // 먼저, 대문자 앞에 공백을 추가하고, 모든 문자를 소문자로 변환합니다.
    const normalizedInput = input.replace(/([A-Z])|[-_]/g, ' $1').toLowerCase();

    // 공백을 기준으로 문자열을 분리하여 배열로 반환합니다.
    const words = normalizedInput.split(/\s+/).filter(Boolean);

    return words;
  }


  convertCases(words: any) {
    // Snake case
    const snakeCase = words.join('_').toLowerCase();
    const snakeCaseL = words.join('_').toUpperCase();
    const defaultCase = words.join('-');
    const spacingCase = words.join(' ');

    // Pascal case
    const pascalCase = words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

    // Camel case
    const camelCase = words.map((word: string, index: number) =>
      index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join('');

    return [
      { 'text':pascalCase, 'type': '파스칼 표기법' },
      { 'text':camelCase, 'type': '낙타 표기법' },
      { 'text': snakeCase, 'type':'스네이크 표기법(소)' },
      { 'text': snakeCaseL, 'type':'스네이크 표기법(대)' },
      { 'text': defaultCase, 'type':'하이픈 표기법' },
      { 'text': spacingCase, 'type':'띄어쓰기 표기법' }];
  }

  onClick ($event: any) {
    const defaultCase = this.splitAndNormalize($event.value);
    if (defaultCase.length > 0) {
      this.resultData = this.convertCases(defaultCase);
    } else {
      alert('지원하지 않는 형식입니다.');
      this.resultData = [];
    }



    // if ($event.value == null) {
    //   alert('값을 입력해주세요');
    //   return;
    // }
    // this.onSearch($event.value);
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
      keywords: `코드 표기법, Code Convention, 코드 컨벤션 파스칼 케이스, 카멜 케이스, 스네이크 케이스, Snake Case, Camel Case, Pascal Case`,
      lang: 'ko',
      title: `코드 표기법 변환기 Wordic | 코드 표기법 | 영어 변수명 짓기 | 컬럼명 짓기 | 변수명 약어 | 컬럼명 약어`,
      description: `파스칼, 스네이크, 카멜 변수를 쉽게 변환하세요. 변수명, 컬럼명, 필드명, 영어 약어, 영문약어 등.`,
      site_name: '코드 표기법 변환기 Wordic',
      site_url: environment.basePath + '/case-convert',
      src: environment.basePath + '/case-convert'
    }
    this.appSeoService.setSeoData(seoData)
  }
  copyClipboard (kebab_case: string) {
    this.clipboard.copy(kebab_case);
    this.toastService.showToast(`${kebab_case} 복사되었습니다.`);
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
