import * as React from 'react';

import { ExpoUsbportViewProps } from './ExpoUsbport.types';

export default function ExpoUsbportView(props: ExpoUsbportViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
