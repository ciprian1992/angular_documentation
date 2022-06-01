import { Component } from '@angular/core';

export abstract class LibHeaderToken {
  abstract doSomething(): void;
}

@Component({
  selector: 'app-lib-header',
  templateUrl: './lib-header.component.html',
  styleUrls: ['./lib-header.component.scss'],
  providers: [{ provide: LibHeaderToken, useExisting: LibHeaderComponent }],
})
export class LibHeaderComponent extends LibHeaderToken {
  public doSomething(): void {
    console.log('test');
  }
}
