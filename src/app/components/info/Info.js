import React from 'react'
import styles from './info.module.css';
import Image from 'next/image';
import Button from '../button/Button';
import cover from '@/public/images/bg/cover-img.webp';

const Info = () => {
    return (
        <div className={styles.stage_1_flex}>
            <div className={styles.stage1_topTxt} aria-label="כותרת">
                <h1>הבריאות שלכם<br />חשובה לנו.</h1>
                <h2>עובדות ועובדים יקרים, אתם הנכס הכי יקר שלנו.<br />הבריאות שלכם חשובה לנו, ולכן אנחנו דואגים<br />שתיהנו מרפואה מתקדמת ומהשירות הטוב ביותר.<br />לפני שמתחילים, חשוב לי לומר לכם כמה מילים:</h2>
                <Button path="/1/question" />
            </div>
            <div className={styles.hoverImage}>
                <Image
                    src={cover} // Default image
                    alt="Descriptive text for the image"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center", position: "absolute" }}
                />

            </div>
        </div>
    )
}

export default Info