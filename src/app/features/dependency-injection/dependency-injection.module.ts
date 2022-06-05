import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionRoutingModule } from './dependency-injection-routing.module';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { CONFIG, TEST_CONFIG } from './test-token';

export const USER_AGENT = new InjectionToken<string>('UserAgent');
export const SCREEN_HEIGHT = new InjectionToken<string>('ScreenHeight');
export const SCREEN_WIDTH = new InjectionToken<string>('ScreenWidth');
export const DEVICE_NAME = new InjectionToken<string>('DeviceName');

@NgModule({
  declarations: [DependencyInjectionComponent],
  imports: [CommonModule, DependencyInjectionRoutingModule],
  providers: [
    { provide: CONFIG, useValue: TEST_CONFIG },
    {
      provide: USER_AGENT,
      useValue: () => window.navigator.userAgent,
    },
    {
      provide: SCREEN_HEIGHT,
      useValue: () => window.screen.height,
    },
    {
      provide: SCREEN_WIDTH,
      useValue: () => window.screen.width,
    },
    {
      provide: DEVICE_NAME,
      useFactory: (
        userAgent: string,
        screenHeight: string,
        screenWidth: string
      ) => {
        // Based on user agent and the screen width and height we can try to guess which device is it

        console.log(userAgent, screenHeight, screenWidth);
        return 'Samsung S8';
      },
      deps: [USER_AGENT, SCREEN_WIDTH, SCREEN_HEIGHT],
    },
  ],
})
export class DependencyInjectionModule {}
