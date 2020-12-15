import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLabelValueDisplayComponent } from './simple-label-value-display.component';

describe('SimpleLabelValueDisplayComponent', () => {
  let component: SimpleLabelValueDisplayComponent;
  let fixture: ComponentFixture<SimpleLabelValueDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleLabelValueDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLabelValueDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
