import { authExchange } from '@urql/exchange-auth';
import { getLocalStorageItem, setLocalStorageItem } from './local-storage';

export interface AuthState {
  isAuth: boolean;
  user: {};
}

export const getTokens = () => {
  const accessToken = getLocalStorageItem('access_token');
  const refreshToken = getLocalStorageItem('refresh_token');
  return { accessToken, refreshToken };
};

export const auth = authExchange(async (utils) => {
  let { accessToken, refreshToken } = getTokens();
  return {
    addAuthToOperation(operation) {
      if (!accessToken || !refreshToken) {
        return operation;
      }

      return utils.appendHeaders(operation, {
        Authorization: `Bearer ${accessToken}`,
      });
    },
    async refreshAuth() {
      const result = await utils.mutate('refresh_token', { refreshToken });
      const refresh = result.data?.refreshLogin;

      if (refresh) {
        accessToken = refresh.accessToken as string;
        refreshToken = refresh.refreshToken as string;
        setLocalStorageItem('access_token', accessToken);
        setLocalStorageItem('refresh_token', refreshToken);
      } else {
        localStorage.clear();
        // logout();
      }
    },
    didAuthError(error, _operation) {
      return error.response.status === 401;
    },
  };
});
