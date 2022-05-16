import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionRoutingModule } from './projection-routing.module';
import { ProjectionComponent } from './projection.component';
import { SingleSlotContentProjectionComponent } from './components/single-slot-content-projection/single-slot-content-projection.component';


@NgModule({
  declarations: [
    ProjectionComponent,
    SingleSlotContentProjectionComponent
  ],
  imports: [
    CommonModule,
    ProjectionRoutingModule
  ]
})
export class ProjectionModule { }
