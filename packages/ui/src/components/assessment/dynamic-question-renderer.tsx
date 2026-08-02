import * as React from 'react';
import type { Question } from '@welliqo/assessment-engine';
import {
  SingleChoice,
  MultipleChoice,
  TextInput,
  TextareaInput,
  NumberInput,
  SliderInput,
  ScaleInput,
  BooleanInput,
  DateInput,
  TimeInput,
  HeightInput,
  WeightInput,
  CardSelection,
  ImageSelection,
} from './inputs';

export interface DynamicQuestionRendererProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
}

export function DynamicQuestionRenderer({
  question,
  value,
  onChange,
  disabled,
}: Readonly<DynamicQuestionRendererProps>) {
  switch (question.type) {
    case 'single-choice':
      return <SingleChoice options={question.options || []} value={value} onChange={onChange} disabled={disabled} />;
    case 'multiple-choice':
      return <MultipleChoice options={question.options || []} value={value || []} onChange={onChange} disabled={disabled} />;
    case 'text':
      return <TextInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'textarea':
      return <TextareaInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'number':
      return <NumberInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'slider':
      // Validation could pass min/max here if extracted
      return <SliderInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'scale':
      return <ScaleInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'boolean':
      return <BooleanInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'date':
      return <DateInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'time':
      return <TimeInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'height':
      return <HeightInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'weight':
      return <WeightInput value={value} onChangeValue={onChange} disabled={disabled} />;
    case 'card-selection':
      return <CardSelection options={question.options || []} value={value} onChange={onChange} disabled={disabled} />;
    case 'image-selection':
      return <ImageSelection options={question.options || []} value={value} onChange={onChange} disabled={disabled} />;
    default:
      return <div className="text-destructive">Unsupported question type: {question.type}</div>;
  }
}
