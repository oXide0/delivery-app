/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
// TODO: REFACTOR THIS

type CallbackFunction<T extends any[] = any[]> = (...args: T) => Promise<void>;

export const useMutation = <T extends any[] = any[]>(callback: CallbackFunction<T>) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submit = async (...args: T) => {
        try {
            setIsSubmitting(true);
            await callback(...args);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return { submit, isSubmitting, error };
};
