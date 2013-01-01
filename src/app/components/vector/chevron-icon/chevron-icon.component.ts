import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-icon',
  templateUrl: './chevron-icon.component.html',
  styleUrls: ['./chevron-icon.component.css']
})
export class ChevronIconComponent {
  @Input() public type: ChevronType = ChevronType.UP;

  getRotationStyle() {
    return { transform: this.type };
  }
}

export enum ChevronType {
  UP = 'rotate(0)',
  DOWN = 'rotate(180deg)',
  LEFT = 'rotate(-90deg)',
  RIGHT = 'rotate(90deg)'
}
