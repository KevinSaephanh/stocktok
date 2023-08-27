import { getLocalStorageItem } from './local-storage';

export interface AuthState {
  isAuth: boolean;
  user: {};
}

export const accessToken = getLocalStorageItem('access_token');
export const refreshToken = getLocalStorageItem('refresh_token');

export const getTokens = () => {
  return { accessToken, refreshToken };
};
