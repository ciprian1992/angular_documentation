import { Directive } from '@angular/core';

@Directive({
  selector: '[appExported]',
  exportAs: 'exported',
})
export class ExportedDirective {
  public exportedValue = 'I am exported';
}
