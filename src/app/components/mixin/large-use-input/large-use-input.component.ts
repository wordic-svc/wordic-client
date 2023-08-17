import { Component, Input } from '@angular/core';
import { ChevronType } from '../../vector/chevron-icon/chevron-icon.component';
import { HttpClient } from '@angular/common/http';
import { LottiService } from '../../common/lotti/lotti.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-large-use-input',
  templateUrl: './large-use-input.component.html',
  styleUrls: ['./large-use-input.component.css']
})
export class LargeUseInputComponent {
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '변환하기';

  protected readonly ChevronType = ChevronType;

  constructor(private httpClient: HttpClient, private lotteSvc: LottiService) { }

  inputFields = [
    { label: '', placeholder: '등록일시', name: 'REG_DT', value: '' },
    { label: '', placeholder: '아이디', name: 'ID', value: '' },
    { label: '', placeholder: '테이블속성구분', name: 'TBL_PRPR_DVSN', value: '' },
    { label: '', placeholder: '데이터사용여부', name: 'DT_USE_YN', value: '' },
    { label: '', placeholder: '회원번호', name: 'MBR_NO', value: '' },
    { label: '', placeholder: '성별구분', name: 'CSTL_DVSN', value: '' },
    { label: '', placeholder: '폰트명', name: 'FONT_NAME', value: '' },
    { label: '', placeholder: '트랜드명', name: 'TREND_NAME', value: '' }
    // Add more fields here if needed
  ];
  onEnterPressed(event: any, field: any) {
    field.value = event.target.value;
    this.onSearch(field.value, field);
  }

  onClick ($event: any, field: any) {
    if (field.value === '' || $event.value == null) {
      alert('값을 입력해주세요');
      return;
    }
    this.onSearch(field.value, field);
  }
  async onSearch(value: string, originField: any) {
    try {
      this.lotteSvc.toggle.emit(true);
      const res: any = await this.httpClient.get(environment.apiUrl + '/text/' + value).toPromise();
      res.result.forEach((item: any) => {
        this.inputFields.forEach((field: any) => {
          if (field.value === item.kor_name) {
            field.name = item.eng_name;
          } else {
            if (originField !== null && field.name === originField.name) {
              field.name = '';
            }
          }
        })
      })
    } catch (error) {
      this.lotteSvc.toggle.emit(false);
    } finally {
      this.lotteSvc.toggle.emit(false);
    }
  }

  allClick () {
    const p = this.inputFields.filter(p => p.value !== '').map(p => p.value);
    this.onSearch(p.join(','), null);
  }
}

