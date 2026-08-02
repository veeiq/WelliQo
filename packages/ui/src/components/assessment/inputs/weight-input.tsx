import * as React from 'react';
import { NumberInput, NumberInputProps } from './number-input';

export function WeightInput(props: Readonly<NumberInputProps>) {
  return <NumberInput {...props} placeholder="Weight (kg)" />;
}
