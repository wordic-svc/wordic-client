import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUseInputComponent } from './single-use-input.component';

describe('SingleUseInputComponent', () => {
  let component: SingleUseInputComponent;
  let fixture: ComponentFixture<SingleUseInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleUseInputComponent]
    });
    fixture = TestBed.createComponent(SingleUseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
