import { TestBed } from '@angular/core/testing';

import { DisplayTemplateService } from 'src/app/core/services/display-template.service';

describe('DisplayTemplateService', () => {
  let service: DisplayTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
