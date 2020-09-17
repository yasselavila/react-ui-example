import { renderHook } from '@testing-library/react-hooks';
import { useMedia } from './use-media';

// TODO
describe('Use Media', () => {
  it('should be defined', () => {
    expect(useMedia).toBeTruthy();
  });

  it('should work as expected', () => {
    const { result } = renderHook(() => useMedia('(max-width: 960px)'));
    expect(result.current).toBeTruthy();
  });
});
