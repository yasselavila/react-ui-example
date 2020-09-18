import { useCallback, useMemo, useState } from 'react';
import { Question, User } from '../../models';
import { useApiQuestions } from '../use-api-questions/use-api-questions';
import { useApiUsers } from '../use-api-users/use-api-users';
import {
  StoredQuestionData,
  useStoredQuestions
} from '../use-stored-questions/use-stored-questions';

export interface UserQuestionsManager {
  loading: boolean;
  error: any | null;
  refetch: () => void;
  user: User;
  pendingQuestion: Question;
  saveQuestion: (answer: number | string) => void;
}

export function useUserQuestions(user: User | string): UserQuestionsManager {
  const userId = typeof user === 'string' ? user : user.id;

  const [, goNext] = useState(0);

  const storage = useStoredQuestions();
  const stored = storage.getValue()?.filter((current) => current.user?.id === userId) ?? [];

  const users = useApiUsers();
  const questions = useApiQuestions();

  const userData = useMemo(() => users.data?.find((usr) => usr.id === userId), [
    userId,
    users.data
  ]);

  const pendingQuestion = useMemo(
    () => questions.data?.filter((q) => !stored.find((s) => s.question.id === q.id)).shift(),
    [questions.data, stored]
  );

  const saveQuestion = useCallback(
    (answer: number | string) => {
      const data: StoredQuestionData = {
        user: userData as User,
        question: pendingQuestion as Question,
        answer
      };

      const stored = storage.getValue();

      const idx = stored.findIndex(
        (current) => current.user.id === userId && current.question.id === pendingQuestion?.id
      );

      if (idx !== -1) {
        stored[idx] = data;
      } else {
        stored.push(data);
      }

      storage.setValue([...stored]);

      goNext((v) => v + 1);
    },
    [pendingQuestion, storage, userData, userId]
  );

  return {
    pendingQuestion: pendingQuestion as Question,
    saveQuestion,
    user: userData as User,
    loading: users.loading || questions.loading,
    error: users.error || questions.error,
    refetch: () => {
      users.refetch();
      questions.refetch();
    }
  };
}
