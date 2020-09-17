import React, { ReactElement, ReactNode, useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../models';
import { AuthContext } from './context';

export interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const history = useHistory();

  const [userInfo, setUserInfoState] = useState<User | null>(
    JSON.parse(localStorage.getItem('auth') || 'null')
  );

  const setUserInfo = useCallback(
    (userInfo: User) => {
      localStorage.setItem('auth', JSON.stringify(userInfo));
      history.push('/share-feedback');
      setUserInfoState(userInfo);
    },
    [history]
  );

  const logout = useCallback(() => {
    localStorage.removeItem('auth');
    setUserInfoState(null);
  }, []);

  const providerValue = useMemo(
    () => ({ isAuthenticated: !!userInfo, userInfo, setUserInfo, logout }),
    [logout, setUserInfo, userInfo]
  );

  return <AuthContext.Provider value={providerValue}>{children}</AuthContext.Provider>;
}
