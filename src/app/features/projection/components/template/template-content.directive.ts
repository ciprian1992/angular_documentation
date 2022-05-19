import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateContent]',
})
export class TemplateContentDirective {
  public constructor(public readonly templateRef: TemplateRef<unknown>) {}
}
