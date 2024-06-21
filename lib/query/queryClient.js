import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';

const STALE_TIME = 1000 * 60; // 1 minutes

export const queryClientConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: STALE_TIME
        },
        mutations: {
            onError: (error) => {
                console.error(error.message);
            }
        }
    }
};

export const getQueryClient = cache(() => new QueryClient(queryClientConfig));