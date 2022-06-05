import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForRootRoutingModule } from './for-root-routing.module';
import { ForRootComponent } from './for-root.component';
import { UserServiceConfig } from './user.service';

@NgModule({
  declarations: [ForRootComponent],
  imports: [CommonModule, ForRootRoutingModule],
})
export class ForRootModule {
  public constructor(@Optional() @SkipSelf() parentModule?: ForRootModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  public static forRoot(
    config: UserServiceConfig
  ): ModuleWithProviders<ForRootModule> {
    return {
      ngModule: ForRootModule,
      providers: [{ provide: UserServiceConfig, useValue: config }],
    };
  }
}
