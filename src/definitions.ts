// Any changes to this file must also be reflected in web.ts

declare module '@capacitor/core' {
  interface PluginRegistry {
    TslAscii: TslAsciiPlugin;
  }
}

// Interface that defines the API for the plugin
export interface TslAsciiPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
