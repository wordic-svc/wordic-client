import { Component } from '@angular/core';
import { ChevronType } from '../../vector/chevron-icon/chevron-icon.component';

@Component({
  selector: 'app-locale-list-box',
  templateUrl: './locale-list-box.component.html',
  styleUrls: ['./locale-list-box.component.css']
})
export class LocaleListBoxComponent {

  type = ChevronType.UP;
  isActive: boolean = false;

  toggleType () {
    this.type = this.type === ChevronType.UP ? ChevronType.DOWN : ChevronType.UP;
    this.isActive = !this.isActive;
  }
}
