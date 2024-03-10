'use client'
import React from 'react'
import styles from './buttonSelect.module.css';
import useSelectButton from '../../hooks/useSelectButton';
import Details from '../collapsible/Details';


const ButtonSelect = () => {
    const { id, updateID } = useSelectButton(1);
    let listButtons = [
        {
            id: 1,
            title: 'מוקד ייעודי מכבי+'
        },
        {
            id: 2,
            title: 'הטבות חברי עובדי מכבי'
        },
        {
            id: 3,
            title: 'הריון ולידה'
        },
        {
            id: 4,
            title: 'כושר ואורח חיים בריא'
        },
    ]
    const handleButtonClick = (idT) => {
        updateID(idT)
    };
    return (
        <div className={styles.wrapperFilterButtons}>
            {listButtons.map((btn) => {
                return (
                    <button onClick={() => handleButtonClick(btn.id)} className={`${styles.filterItem} ${id === btn.id ? styles.active : ''}`} key={btn.id}>
                        <p>{btn.title}</p>
                    </button>
                )
            })}
            <Details parentId={id} />
        </div>
    )
}

export default ButtonSelect;