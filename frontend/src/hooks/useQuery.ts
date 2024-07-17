import { useEffect, useState } from 'react';

export const useQuery = <T>(callback: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetch = async () => {
        try {
            setIsLoading(true);
            const response = await callback();
            setData(response);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    return { data, isLoading, error };
};
