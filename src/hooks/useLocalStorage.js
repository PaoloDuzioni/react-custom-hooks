import { useState, useEffect } from 'react';

/**
 * LocalStorage Hook
 *
 * In case there is more than a component that needs to
 * store and manipulate localStorage values in the same way
 */
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return JSON.parse(localStorage.getItem('my-count')) || initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
};

export default useLocalStorage;
