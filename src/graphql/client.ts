import { cacheExchange, createClient, fetchExchange } from 'urql';
import { getEnvVar } from '../utils/get-env-var';
import { getLocalStorageItem } from '../utils/local-storage';
import { auth } from '../utils/auth';

export const client = createClient({
  fetchOptions: () => {
    const token = getLocalStorageItem('accessToken');
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  },
  url: getEnvVar('GRAPHQL_URL'),
  exchanges: [cacheExchange, fetchExchange, auth],
});
