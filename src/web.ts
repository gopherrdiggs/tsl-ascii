import { WebPlugin } from '@capacitor/core';
import { TslAsciiPlugin } from './definitions';

export class TslAsciiWeb extends WebPlugin implements TslAsciiPlugin {
  constructor() {
    super({
      name: 'TslAscii',
      platforms: ['web'],
    });
  }

  // "web" implementation for the echo function simply logs to console.
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const TslAscii = new TslAsciiWeb();

export { TslAscii };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TslAscii);
