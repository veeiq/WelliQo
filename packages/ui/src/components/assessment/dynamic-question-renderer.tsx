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
      return (
        <SingleChoice
          options={question.options || []}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      );
    case 'multiple-choice':
      return (
        <MultipleChoice
          options={question.options || []}
          value={value || []}
          onChange={onChange}
          disabled={disabled}
        />
      );
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
      return (
        <CardSelection
          options={question.options || []}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      );
    case 'image-selection':
      return (
        <ImageSelection
          options={question.options || []}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      );
    default:
      console.warn(`[WelliQo Assessment Engine] Gracefully recovered from unknown question type: ${question.type}`);
      return (
        <div className="space-y-4 animate-in fade-in duration-500">
          <p className="text-slate-500 dark:text-slate-400 text-sm italic">
            This interaction format is currently being optimized. Please feel free to answer in your own words below.
          </p>
          <TextInput value={value} onChangeValue={onChange} disabled={disabled} />
        </div>
      );
  }
}
