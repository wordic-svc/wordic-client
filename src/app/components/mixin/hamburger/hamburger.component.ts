import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {
  isOpen: boolean = false;

  onMove (engAbbreviate: string) {
    location.href = `/${engAbbreviate}`;
  }
}
