import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss'],
})
export class StructuralDirectiveComponent {
  public show = false;

  public toggle(): void {
    this.show = !this.show;
  }
}
