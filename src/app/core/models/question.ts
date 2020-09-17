export interface QuestionOption {
  value: number;
  label: string;
}

export interface Question {
  id: string;
  type: 'text' | 'scale' | 'multipleChoice';
  required?: boolean;
  label: string;
  options?: QuestionOption[];
}
