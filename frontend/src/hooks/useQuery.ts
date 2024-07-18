import { useCallback, useEffect, useState } from 'react';

interface QueryResult<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}

export const useQuery = <T>(
    callback: () => Promise<T>,
    dependencies: any[] = []
): QueryResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetch = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await callback();
            setData(response);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    }, [callback]);

    useEffect(() => {
        fetch();

        // Cleanup function to avoid setting state after unmount
        return () => {
            setIsLoading(false);
            setError(null);
        };
    }, [fetch, ...dependencies]);

    return { data, isLoading: !data ? true : isLoading, error, refetch: fetch };
};
