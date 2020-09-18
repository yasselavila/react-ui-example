import { useAuth } from '../../context/auth';
import { Question, User } from '../../models';
import { LocalStorageManager, useLocalStorage } from '../use-local-storage/use-local-storage';

export interface StoredQuestionData {
  user: User;
  question: Question;
  answer: number | string;
}

export function useStoredQuestions(): LocalStorageManager<StoredQuestionData[]> {
  const { userInfo } = useAuth();

  return useLocalStorage<StoredQuestionData[]>(`questions.${userInfo?.id}`, []);
}
