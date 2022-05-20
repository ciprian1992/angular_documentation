import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTemplateDirective]',
})
export class TemplateDirectiveDirective {
  public constructor(public viewContainerRef: ViewContainerRef) {}
}
