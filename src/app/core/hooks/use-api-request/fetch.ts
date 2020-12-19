import crossFetch from 'cross-fetch';
import fetchRetry from 'fetch-retry';

export const fetch = fetchRetry(crossFetch, {
  retries: 10,
  retryDelay: 1000
});
