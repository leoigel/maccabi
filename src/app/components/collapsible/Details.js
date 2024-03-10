import React from 'react'
import styles from './details.module.css';
import { listItems } from '../../assets/listItens';
import useSelectButton from '../../hooks/useSelectButton';
import Image from 'next/image';
const Details = ({ parentId }) => {
    const { updateID, id } = useSelectButton(null)
    // console.log(id)
    let item = listItems.find((item) => item.id === parentId)
    const { currentItem } = item;
    const handleOpenItem = (id) => {
        updateID(id)
    }
    return (
        <div className={styles.wrapper_list}>
            {currentItem.map((item, index) => (
                <button onClick={() => handleOpenItem(item.id)} key={item.id} className={`${styles.itemList} ${styles.itemList3} ${styles.filter}`}>
                    <div className={styles.wrapperImageTitle}>
                        <div className={styles.right}>
                            <Image loading="lazy" className={styles.listImage} src={item.imageSrc} alt={item.imageAlt} aria-hidden="true" tabIndex="-1" />
                            <p className={styles.titleList}>{item.title}</p>
                        </div>
                        <div className={styles.left}>
                            <Image loading="lazy" className={styles.arrow} src={item.arrow} alt="תמונת חץ" aria-hidden="true" tabIndex="-1" />
                        </div>
                    </div>
                    <div className={`${styles.descriptionList} ${id === item.id ? styles.active : ''}`}>
                        <p className={styles.descriptionListDes}>{item.sub_title}</p>
                        <p className={styles.descriptionListDes}>{item.content}</p>
                    </div>
                    <div className={styles.hr}></div>
                </button>
            ))}
        </div>
    );
};

export default Details;