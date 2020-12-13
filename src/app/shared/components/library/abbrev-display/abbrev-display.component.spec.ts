import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AbbrevDisplayComponent} from 'src/app/shared/components/library/abbrev-display/abbrev-display.component';


describe('SimpleDisplayComponent', () => {
  let component: AbbrevDisplayComponent;
  let fixture: ComponentFixture<AbbrevDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbrevDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbrevDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
