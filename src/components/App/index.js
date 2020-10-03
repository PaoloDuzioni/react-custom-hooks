import React from 'react';
import styles from './style.module.scss';
import Header from '../Header';
import UserForm from '../UserForm';
import Counter from '../Counter';
import Shape from '../Shape';

function App() {
    return (
        <div className={styles.App}>
            <Header />

            <main className={styles.Container}>
                <section className={styles.Col}>
                    <UserForm />
                </section>

                <section className={styles.Col}>
                    <Counter />
                </section>
            </main>

            <Shape />
        </div>
    );
}

export default App;
