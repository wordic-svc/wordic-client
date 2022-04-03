import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumIconComponent } from './colum-icon.component';

describe('ColumIconComponent', () => {
  let component: ColumIconComponent;
  let fixture: ComponentFixture<ColumIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumIconComponent]
    });
    fixture = TestBed.createComponent(ColumIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
