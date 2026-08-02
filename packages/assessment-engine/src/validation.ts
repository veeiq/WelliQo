import { Question, ValidationResult } from './types';

export function validateAnswer(question: Question, answer: any): ValidationResult {
  const errors: string[] = [];

  if (question.required && (answer === undefined || answer === null || answer === '')) {
    errors.push('This question is required.');
  }

  if (answer !== undefined && answer !== null && answer !== '') {
    for (const rule of question.validation || []) {
      switch (rule.type) {
        case 'min':
          if (typeof answer === 'number' && answer < rule.value) {
            errors.push(rule.message);
          } else if (typeof answer === 'string' && answer.length < rule.value) {
            errors.push(rule.message);
          } else if (Array.isArray(answer) && answer.length < rule.value) {
            errors.push(rule.message);
          }
          break;
        case 'max':
          if (typeof answer === 'number' && answer > rule.value) {
            errors.push(rule.message);
          } else if (typeof answer === 'string' && answer.length > rule.value) {
            errors.push(rule.message);
          } else if (Array.isArray(answer) && answer.length > rule.value) {
            errors.push(rule.message);
          }
          break;
        case 'pattern':
          if (typeof answer === 'string' && !new RegExp(rule.value).test(answer)) {
            errors.push(rule.message);
          }
          break;
        case 'required':
          if (Array.isArray(answer) && answer.length === 0) {
            errors.push(rule.message);
          }
          break;
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
