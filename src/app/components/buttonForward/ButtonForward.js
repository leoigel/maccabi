import React from 'react'
import styles from './buttonForward.module.css';
import Link from 'next/link';
const ButtonForward = ({ url }) => {
    return (
        <Link href={url}>
            <button className={`${styles.buttonToggleFinal_2} ${styles.continue}`} role="button" aria-description="כפתור לשלב הבא">
                <p>להמשיך</p>
                <span></span>
            </button>
        </Link>
    )
}

export default ButtonForward