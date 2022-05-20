import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewChild,
} from '@angular/core';
import { SimpleComponent } from './components/simple/simple.component';
import { TemplateDirectiveDirective } from './template-directive.directive';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss'],
})
export class DynamicComponentsComponent {
  @ViewChild(TemplateDirectiveDirective, { static: true })
  public templateDirective!: TemplateDirectiveDirective;
  private factory!: any;
  private i = 0;

  public constructor(
    public readonly factoryResolver: ComponentFactoryResolver
  ) {
    this.factory =
      this.factoryResolver.resolveComponentFactory(SimpleComponent);
  }

  public addNewComponent(): void {
    this.templateDirective.viewContainerRef.clear();
    const ref: ComponentRef<SimpleComponent> =
      this.templateDirective.viewContainerRef.createComponent(this.factory);

    ref.instance.test = ++this.i;
  }
}
