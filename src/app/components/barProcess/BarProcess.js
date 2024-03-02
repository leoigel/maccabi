'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import useParamsHook from '../../hooks/useParamsHook';
import styles from './barProcess.module.css';

const BarProcess = () => {
    const params = useParams();
    const { width } = useParamsHook(params)
    return (
        <div className={styles.progressBar}>
            <span style={{ width: `${width}%` }}></span>
        </div>
    )
}

export default BarProcess