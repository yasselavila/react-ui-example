import { createContext, useContext } from 'react';
import { User } from '../../models';

export interface AuthContextValue {
  isAuthenticated: boolean;
  userInfo: User | null;
  setUserInfo(userInfo: User): void;
  logout(): void;
}

export const AuthContext = createContext<AuthContextValue>(null as never);

export const useAuth = () => useContext(AuthContext);
