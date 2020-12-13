import {Directive, ViewContainerRef} from '@angular/core';

//used to mark the insertion points for display templates.
@Directive({
  selector: '[appBoxDisplayTemplate]'
})
export class DisplayTemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef ) {}
}
//injects ViewContainerRef to gain access to the view container of the element that will host the dynamically added component.
