import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoWayBindingRoutingModule } from './two-way-binding-routing.module';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { SizerComponent } from './components/sizer/sizer.component';

@NgModule({
  declarations: [TwoWayBindingComponent, SizerComponent],
  imports: [CommonModule, TwoWayBindingRoutingModule],
})
export class TwoWayBindingModule {}
