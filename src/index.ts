import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoUsbport.web.ts
// and on native platforms to ExpoUsbport.ts
import ExpoUsbportModule from './ExpoUsbportModule';
import ExpoUsbportView from './ExpoUsbportView';
import { ChangeEventPayload, ExpoUsbportViewProps } from './ExpoUsbport.types';

// Get the native constant value.
export const PI = ExpoUsbportModule.PI;

export function hello(): string {
  return ExpoUsbportModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoUsbportModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoUsbportModule ?? NativeModulesProxy.ExpoUsbport);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoUsbportView, ExpoUsbportViewProps, ChangeEventPayload };
