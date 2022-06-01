import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { LightweightInjectionTokenRoutingModule } from './lightweight-injection-token-routing.module';

import { LightweightInjectionTokenComponent } from './lightweight-injection-token.component';

import { LibCardComponent } from './lib-card/lib-card.component';

import { LibHeaderComponent } from './lib-header/lib-header.component';

@NgModule({
  declarations: [
    LightweightInjectionTokenComponent,
    LibCardComponent,
    LibHeaderComponent,
  ],

  imports: [CommonModule, LightweightInjectionTokenRoutingModule],
})
export class LightweightInjectionTokenModule {}
