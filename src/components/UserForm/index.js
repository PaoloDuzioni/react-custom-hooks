import React from 'react';
import styles from './style.module.scss';
import useInput from '../../hooks/useInput';

const UserForm = () => {
    const [name, nameInputOptions, resetName] = useInput('');
    const [age, ageInputOptions, resetAge] = useInput('');

    const submitForm = e => {
        e.preventDefault();
        if (name !== '' && age !== '') {
            // Do something with data
            alert(`Here is your submited data: \nName: ${name}\n Age: ${age}`);

            // Reset fields value
            resetName();
            resetAge();
        }
    };

    return (
        <div className="app-form">
            <h2>Input Hook</h2>

            <form className={styles.Form} onSubmit={submitForm}>
                <div className="form-field">
                    <input
                        type="text"
                        placeholder="Name"
                        {...nameInputOptions}
                    />
                </div>

                <div className="form-field mb-2">
                    <input
                        type="number"
                        placeholder="Age"
                        {...ageInputOptions}
                    />
                </div>

                <div className="text-right">
                    <button className="button" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
