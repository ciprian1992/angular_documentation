import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionRoutingModule } from './projection-routing.module';
import { ProjectionComponent } from './projection.component';
import { MultiSlotComponent } from './components/multi-slot/multi-slot.component';
import { SingleSlotComponent } from './components/single-slot/single-slot.component';
import { TemplateComponent } from './components/template/template.component';
import { TemplateContentDirective } from './components/template/template-content.directive';

@NgModule({
  declarations: [
    ProjectionComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    TemplateComponent,
    TemplateContentDirective,
  ],
  imports: [CommonModule, ProjectionRoutingModule],
})
export class ProjectionModule {}
