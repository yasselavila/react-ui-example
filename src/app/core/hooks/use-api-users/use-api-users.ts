import { User } from '../../models';
import { ApiRequestManagement, useApiRequest } from '../use-api-request/use-api-request';

export function useApiUsers(): ApiRequestManagement<User[]> {
  return useApiRequest<User[]>('/users');
}
