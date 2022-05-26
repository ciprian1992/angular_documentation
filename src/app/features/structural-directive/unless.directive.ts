import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/*When structural directives are applied they generally are prefixed by an asterisk, *, such as *ngIf.

This convention is shorthand that Angular interprets and converts into a longer form.

Angular transforms the asterisk in front of a structural directive into an <ng-template> that surrounds the host element and its descendants.*/

/* With TemplateRef you can take the template content */

/* With view container you can take the component view container and add siblings to it via createEmbeddedView*/

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  public exposedField = 'exposed';
  private hasView = false;

  public constructor(
    public templateRef: TemplateRef<any>,

    public viewContainer: ViewContainerRef
  ) {}

  @Input() public set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);

      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();

      this.hasView = false;
    }
  }
}
