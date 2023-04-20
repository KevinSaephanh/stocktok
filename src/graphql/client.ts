import { cacheExchange, fetchExchange } from 'urql';
import { getLocalStorageItem } from '../utils/local-storage';
import { auth } from '../utils/auth';
import { withUrqlClient } from 'next-urql';
import { getEnvVar } from '../utils/get-env-var';

export const client = withUrqlClient((_ssrExchange, _ctx) => ({
  url: getEnvVar('GRAPHQL_URL', true),
  exchanges: [cacheExchange, fetchExchange, auth],
  fetchOptions: () => {
    const token = getLocalStorageItem('accessToken');
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  },
}));
