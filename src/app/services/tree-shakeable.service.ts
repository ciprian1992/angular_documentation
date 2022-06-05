import { Injectable } from '@angular/core';

/*
 Registering the provider in the @Injectable() metadata also allows Angular to optimize an app by removing the service from the compiled application
 if it isn't used, a process known as tree-shaking.
*/

@Injectable({
  providedIn: 'root',
})
export class TreeShakeableService {
  public constructor() {
    console.log('test');
  }
}
