import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseConvertComponent } from './case-convert.component';

describe('CaseConvertComponent', () => {
  let component: CaseConvertComponent;
  let fixture: ComponentFixture<CaseConvertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseConvertComponent]
    });
    fixture = TestBed.createComponent(CaseConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
