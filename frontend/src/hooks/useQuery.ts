import { useState } from 'react';

type CallbackFunction = () => Promise<any>;

export const useQuery = (callback: CallbackFunction) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetch = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { fetch, isLoading, error };
};
