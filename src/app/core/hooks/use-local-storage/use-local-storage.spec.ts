import { renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from './use-local-storage';

// TODO
describe('Use Local Storage', () => {
  it('should be defined', () => {
    expect(useLocalStorage).toBeTruthy();
  });

  it('should work as expected', () => {
    const { result } = renderHook(() => useLocalStorage<any>('test'));
    expect(result.current).toBeTruthy();
  });
});
