import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomElementsComponent } from './custom-elements.component';

const routes: Routes = [{ path: '', component: CustomElementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomElementsRoutingModule {}
