import * as React from 'react';
import { NumberInput, NumberInputProps } from './number-input';

export function HeightInput(props: Readonly<NumberInputProps>) {
  return <NumberInput {...props} placeholder="Height (cm)" />;
}
