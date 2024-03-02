import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

const Button = ({ path }) => {

    return (
        <Link href={path}>
            <button className={styles.button}>
                <p>כאן מתחילים</p>
                <span></span>
            </button>
        </Link>
    );
}

export default Button;
