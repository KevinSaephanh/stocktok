import { cacheExchange, fetchExchange } from 'urql';
import { getLocalStorageItem } from '../utils/local-storage';
import { auth } from '../utils/auth';
import { WithUrqlProps, withUrqlClient } from 'next-urql';
import { getEnvVar } from '../utils/get-env-var';
import { NextPage } from 'next';

export const url = getEnvVar('GRAPHQL_URL', true);

export const withUrql = (page: NextPage<WithUrqlProps>) =>
  withUrqlClient(
    (_ssrExchange, _ctx) => ({
      url,
      exchanges: [cacheExchange, fetchExchange, auth],
      fetchOptions: () => {
        const token = getLocalStorageItem('accessToken');
        return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      },
    }),
    { ssr: true }
  )(page);
