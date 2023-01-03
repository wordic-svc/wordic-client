import { Component, Input } from '@angular/core';
import { ChevronType } from '../../vector/chevron-icon/chevron-icon.component';

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
}
