import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLogin: boolean = false;
  constructor (private location: Location) {
  }
  ngOnInit (): void {
  }

  onMove (engAbbreviate: string) {
    location.href = `/${engAbbreviate}`;
  }
}
