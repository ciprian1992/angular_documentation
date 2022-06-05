import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  public userName = 'Philip Marlowe';
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public id = nextId++;

  public constructor(@Optional() config?: UserServiceConfig) {
    if (config) {
      this._userName = config.userName;
    }
  }

  public get userName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }
  private _userName = 'Sherlock Holmes';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
