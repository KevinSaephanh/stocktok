import { authExchange } from '@urql/exchange-auth';
import { getEnvVar } from './get-env-var';

async function initializeAuthState() {
  const accessToken = await AsyncStorage.getItem(getEnvVar('ACCESS_TOKEN_SECRET'));
  const refreshToken = await AyncStorage.getItem(getEnvVar('REFRESH_TOKEN_SECRET'));
  return { accessToken, refreshToken };
}

authExchange(async (utils) => {
  let { accessToken, refreshToken } = initializeAuthState();
  return {
    addAuthToOperation(operation) {
      if (!accessToken) {
        return operation;
      }
      return utils.appendHeaders(operation, {
        Authorization: `Bearer ${accessToken}`,
      });
    },
    didAuthError(error, _operation) {
      return error.response.status === 401;
    },
    async refreshAuth() {
      const result = await utils.mutate(getEnvVar('REFRESH_TOKEN_SECRET'), { refreshToken });

      if (result.data?.refreshLogin) {
        accessToken = result.data.refreshLogin.accessToken;
        refreshToken = result.data.refreshLogin.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
      } else {
        localStorage.clear();
        // logout();
      }
    },
  };
});
