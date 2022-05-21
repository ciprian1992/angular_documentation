import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomElementsRoutingModule } from './custom-elements-routing.module';
import { CustomElementsComponent } from './custom-elements.component';
import { SimpleComponent } from './components/simple/simple.component';


@NgModule({
  declarations: [
    CustomElementsComponent,
    SimpleComponent
  ],
  imports: [
    CommonModule,
    CustomElementsRoutingModule
  ]
})
export class CustomElementsModule { }
