import { renderHook } from '@testing-library/react-hooks';
import { useApiRequest } from './use-api-request';

// TODO
describe('Use Api Request', () => {
  it('should be defined', () => {
    expect(useApiRequest).toBeTruthy();
  });

  it('should work as expected', () => {
    const { result } = renderHook(() => useApiRequest<any>('/users'));
    expect(result.current).toBeTruthy();
  });
});
