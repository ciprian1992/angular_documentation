import { InjectionToken } from '@angular/core';

export interface Config {
  id: string;
}

export const TEST_CONFIG: Config = {
  id: 'test',
};

export const CONFIG = new InjectionToken<Config>('config');
