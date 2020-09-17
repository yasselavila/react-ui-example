import { renderHook } from '@testing-library/react-hooks'
import { useStoredQuestions } from './use-stored-questions';

// TODO
describe('Use Stored Questions', () => {
  it('should be defined', () => {
    expect(useStoredQuestions).toBeTruthy();
  });

  it('should work as expected', () => {
    const { result } = renderHook(() => useStoredQuestions())
    expect(result.current).toBeTruthy();
  });
});
