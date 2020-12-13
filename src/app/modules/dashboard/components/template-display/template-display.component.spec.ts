import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDisplayComponent } from 'src/app/modules/dashboard/components/template-display/template-display.component';

describe('DasboardBoxComponent', () => {
  let component: TemplateDisplayComponent;
  let fixture: ComponentFixture<TemplateDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
