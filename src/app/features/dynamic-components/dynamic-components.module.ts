import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentsRoutingModule } from './dynamic-components-routing.module';
import { DynamicComponentsComponent } from './dynamic-components.component';
import { TemplateDirectiveDirective } from './template-directive.directive';
import { SimpleComponent } from './components/simple/simple.component';

@NgModule({
  declarations: [
    DynamicComponentsComponent,
    TemplateDirectiveDirective,
    SimpleComponent,
  ],
  imports: [CommonModule, DynamicComponentsRoutingModule],
})
export class DynamicComponentsModule {}
