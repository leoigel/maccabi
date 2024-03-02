
import React, { Suspense } from 'react';
import styles from './lastPage.module.css';
import Wrapper from '../components/wrapper/Wrapper';
import Loading from '@/src/app/components/loading/Loading';
import ButtonSelect from '../components/buttonsSelect/ButtonSelect';
import Test from '../components/Test';
const page = async () => {
    return (

        <Wrapper>
            {/* <Suspense fallback={<Loading />}> */}
            <p className={styles.titleStage3}>שמחים לשמוע שבחרתם בנו!<br />כי עובדי מכבי מקבלים יותר, הרבה יותר</p>
            {/* </Suspense> */}
            <ButtonSelect />
        </Wrapper>


    )
}

export default page