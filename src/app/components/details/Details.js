import React from 'react'
import styles from './details.module.css';

const Details = () => {
    return (
        <details className={styles.details}>
            <summary className={styles.summary}>Summary</summary>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li><li>5</li>
            </ul>
        </details>
    )
}

export default Details