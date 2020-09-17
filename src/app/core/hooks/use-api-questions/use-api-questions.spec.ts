import { renderHook } from '@testing-library/react-hooks';
import { useApiQuestions } from './use-api-questions';

// TODO
describe('Use Api Questions', () => {
  it('should be defined', () => {
    expect(useApiQuestions).toBeTruthy();
  });

  it('should work as expected', () => {
    const { result } = renderHook(() => useApiQuestions());
    expect(result.current).toBeTruthy();
  });
});
