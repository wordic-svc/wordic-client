import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { LottiService } from './lotti.service';

@Component({
  selector: 'app-lotti',
  templateUrl: './lotti.component.html',
  styleUrls: ['./lotti.component.css']
})
export class LottiComponent implements OnInit, OnDestroy{
  show = false;
  constructor(private lottiSvc: LottiService, private cdr: ChangeDetectorRef) {
    this.lottiSvc.toggle.subscribe((state) => {
      this.show = state;
      this.cdr.detectChanges(); // Manually trigger change detection
    });
  }

  ngOnDestroy(): void {
    this.lottiSvc.toggle.unsubscribe();
    }

  options: AnimationOptions = {
    path: './assets/animation.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit (): void {
  }
}
