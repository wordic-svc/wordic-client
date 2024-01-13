import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleUseInputService {
  @Output()
  onSearch = new EventEmitter<any>();
  constructor() { }
}
