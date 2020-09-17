import { renderHook } from '@testing-library/react-hooks'
import { useApiUsers } from './use-api-users';

// TODO
describe('Use Api Users', () => {
  it('should be defined', () => {
    expect(useApiUsers).toBeTruthy();
  });

  it('should work as expected', () => {
    const { result } = renderHook(() => useApiUsers())
    expect(result.current).toBeTruthy();
  });
});
