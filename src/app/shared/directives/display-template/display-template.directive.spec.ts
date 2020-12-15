import {DisplayTemplateDirective} from 'src/app/shared/directives/display-template/display-template.directive';
import {ViewChild, ViewContainerRef} from '@angular/core';

describe('BoxDisplayTemplateDirective', () => {
  it('should create an instance', () => {
    let appDisplayTemplate: DisplayTemplateDirective;
    const viewContainerRef = appDisplayTemplate.viewContainerRef
    const directive = new DisplayTemplateDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
