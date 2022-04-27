import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngAbbreviateComponent } from './eng-abbreviate.component';

describe('EngAbbreviateComponent', () => {
  let component: EngAbbreviateComponent;
  let fixture: ComponentFixture<EngAbbreviateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngAbbreviateComponent]
    });
    fixture = TestBed.createComponent(EngAbbreviateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
