import { renderHook } from '@testing-library/react-hooks';
import { useUserQuestions } from './use-user-questions';

// TODO
describe('Use User Questions', () => {
  it('should be defined', () => {
    expect(useUserQuestions).toBeTruthy();
  });

  it('should work as expected', () => {
    const { result } = renderHook(() => useUserQuestions('todo'));
    expect(result.current).toBeTruthy();
  });
});
