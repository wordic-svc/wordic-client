import { Component, OnInit } from '@angular/core';
import { AlertModalService } from '../../components/modal/alert-modal/alert-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor (private alertModalSvc: AlertModalService) {
  }
  ngOnInit (): void {
    // setTimeout(() => {
    //   this.alertModalSvc.toggle.next({});
    // })
  }

}
