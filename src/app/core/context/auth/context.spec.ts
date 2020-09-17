import { AuthContext, useAuth } from './context';

// TODO
describe('Auth Context', () => {
  it('should be defined', () => {
    expect(AuthContext).toBeDefined();
  });

  it('useAuth()', () => {
    expect(useAuth).toBeDefined();
  });
});
