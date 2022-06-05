import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ForRootComponent } from './for-root.component';

const routes: Routes = [{ path: '', component: ForRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForRootRoutingModule {}
