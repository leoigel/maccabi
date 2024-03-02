
import React from 'react'
import styles from './buttonCheckBox.module.css';

const ButtonCheckBox = ({ text, active, onClick }) => {

    return (
        <button className={styles.buttonToggleFriend_2} onClick={onClick}>
            <p>{text}</p>
            <div className={`${styles.toggleCircle} ${active ? styles.active : ''}`} ><span ></span></div>
        </button>

    )
}

export default ButtonCheckBox