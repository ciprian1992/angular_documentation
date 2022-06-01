import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { LibHeaderToken } from '../lib-header/lib-header.component';

@Component({
  selector: 'app-lib-card',
  templateUrl: './lib-card.component.html',
  styleUrls: ['./lib-card.component.scss'],
})
export class LibCardComponent implements AfterContentInit {
  @ContentChild(LibHeaderToken) public header!: LibHeaderToken | null = null;

  public ngAfterContentInit(): void {
    this.header && this.header.doSomething();
  }
}
