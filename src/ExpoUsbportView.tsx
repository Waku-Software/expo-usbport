import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoUsbportViewProps } from './ExpoUsbport.types';

const NativeView: React.ComponentType<ExpoUsbportViewProps> =
  requireNativeViewManager('ExpoUsbport');

export default function ExpoUsbportView(props: ExpoUsbportViewProps) {
  return <NativeView {...props} />;
}
