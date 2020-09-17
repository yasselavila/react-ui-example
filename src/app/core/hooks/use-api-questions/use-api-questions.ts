import { Question } from '../../models';
import { ApiRequestManagement, useApiRequest } from '../use-api-request/use-api-request';

export function useApiQuestions(): ApiRequestManagement<Question[]> {
  return useApiRequest<Question[]>('/questions');
}
