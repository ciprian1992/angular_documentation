import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightweightInjectionTokenComponent } from './lightweight-injection-token.component';

const routes: Routes = [{ path: '', component: LightweightInjectionTokenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightweightInjectionTokenRoutingModule { }
