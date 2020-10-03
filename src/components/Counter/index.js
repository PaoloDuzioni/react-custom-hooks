import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './style.module.scss';

const Counter = () => {
    const [count, setCount] = useLocalStorage('my-count', 0);
    return (
        <div className="app-counter">
            <h2>LocalStorage Hook</h2>
            <div className={styles.Counter}>
                <div className={`mb-1 ${styles.Display}`}>{count}</div>

                <button
                    className="button small"
                    onClick={e => setCount(count + 1)}
                >
                    Increment
                </button>
                <button
                    className="button small"
                    onClick={e => setCount(count > 0 ? count - 1 : count)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
