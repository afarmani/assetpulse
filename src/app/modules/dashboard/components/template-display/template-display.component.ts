import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {AddDisplayTemplateItem} from 'src/app/shared/components/add-display-template-item';
import {DisplayTemplateService} from 'src/app/core/services/display-template.service';
import {DisplayTemplateDirective} from 'src/app/shared/directives/display-template/display-template.directive';

@Component({
  selector: 'app-template-display',
  templateUrl: './template-display.component.html',
  styleUrls: ['./template-display.component.sass']
})
export class TemplateDisplayComponent implements OnInit {

  @Input() symbolKey: string;
  displayTemplateItems: AddDisplayTemplateItem
  @ViewChild(DisplayTemplateDirective, {static: true}) appBoxDisplayTemplate: DisplayTemplateDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private displayTemplateService: DisplayTemplateService) { }

  ngOnInit(): void {
    this.displayTemplateItems = this.displayTemplateService.getDisplayTemplate(this.symbolKey)
    this.loadDisplayTemplateComponents();
  }

  private loadDisplayTemplateComponents() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.displayTemplateItems.component);
    const viewContainerRef = this.appBoxDisplayTemplate.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = this.displayTemplateItems.data

  }
}
