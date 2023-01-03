import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeUseInputComponent } from './large-use-input.component';

describe('LargeUseCardComponent', () => {
  let component: LargeUseInputComponent;
  let fixture: ComponentFixture<LargeUseInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LargeUseInputComponent]
    });
    fixture = TestBed.createComponent(LargeUseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
