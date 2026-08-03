import { Question, NavigationRule } from './types';

export interface QuestionSequenceItem {
  question: Question;
  rules: NavigationRule[];
  defaultNextId: string | 'END';
}

export class QuestionRegistry {
  private questions = new Map<string, QuestionSequenceItem>();
  private firstQuestionId: string | null = null;

  register(question: Question, defaultNextId: string | 'END', rules: NavigationRule[] = []) {
    if (this.questions.size === 0) {
      this.firstQuestionId = question.id;
    }
    this.questions.set(question.id, { question, rules, defaultNextId });
  }

  getQuestion(id: string): QuestionSequenceItem | undefined {
    return this.questions.get(id);
  }

  getFirstQuestionId(): string | null {
    return this.firstQuestionId;
  }

  getAllQuestions(): Question[] {
    return Array.from(this.questions.values()).map((item) => item.question);
  }
}
