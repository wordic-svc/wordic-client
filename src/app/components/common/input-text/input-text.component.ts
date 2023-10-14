import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements AfterViewInit {
  @Input()
  label: string = '';
  @Input()
  Placeholder = '';
  @Input()
  name = '';
  @Output() enterPressed = new EventEmitter<any>();
  // enter key press event
  @ViewChild('inputElement') inputElement!: ElementRef;
  @Input() isFocus = false; // Added input property to check if it's the first item
  @Input()
  value: any
  @Output() valueChange = new EventEmitter<any>();

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.isFocus) {
      this.renderer.selectRootElement(this.inputElement.nativeElement).focus();
    }
  }
  onEnterPressed(event: any) {
    this.enterPressed.emit(event);
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  onChange ($event: Event) {
    this.valueChange.emit(($event.target as HTMLInputElement).value);
  }
}
