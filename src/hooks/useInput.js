import { useState } from 'react';

/**
 * Custom hook to handle form inputs get and set values
 */
const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const inputOptions = {
        value,
        onChange: e => setValue(e.target.value),
    };

    // reset to initial value function
    const reset = () => {
        setValue(initialValue);
    };

    return [value, inputOptions, reset];
};

export default useInput;
