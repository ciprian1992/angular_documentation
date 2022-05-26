import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { StructuralDirectiveRoutingModule } from './structural-directive-routing.module';

import { StructuralDirectiveComponent } from './structural-directive.component';

import { UnlessDirective } from './unless.directive';
import { ExportedDirective } from './exported.directive';

@NgModule({
  declarations: [StructuralDirectiveComponent, UnlessDirective, ExportedDirective],

  imports: [CommonModule, StructuralDirectiveRoutingModule],
})
export class StructuralDirectiveModule {}
