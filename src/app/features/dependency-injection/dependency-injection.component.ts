import { Component, Inject, OnInit } from '@angular/core';
import { DEVICE_NAME, SCREEN_WIDTH } from './dependency-injection.module';
import { Config, CONFIG } from './test-token';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
})
export class DependencyInjectionComponent {
  public constructor(
    @Inject(CONFIG) public readonly config: Config,
    @Inject(SCREEN_WIDTH) public readonly screenWidth: string,
    @Inject(DEVICE_NAME) public readonly deviceName: string
  ) {
    console.log(config);
    console.log(screenWidth);
    console.log(deviceName);
  }
}
