import * as React from 'react';
import { SingleChoice, SingleChoiceProps } from './single-choice';

export function CardSelection(props: Readonly<SingleChoiceProps>) {
  // For v1, reuse the SingleChoice structure which is already styled like a card.
  return <SingleChoice {...props} />;
}
