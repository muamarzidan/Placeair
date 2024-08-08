import { useState, useEffect } from 'react';

function useDebounceSearch(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handlerSearchByValue = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handlerSearchByValue);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounceSearch;