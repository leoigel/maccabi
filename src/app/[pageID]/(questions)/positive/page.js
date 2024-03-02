
import React, { Suspense } from 'react'
import Questionnaire from '@/src/app/components/questionnaire/Questionnaire';
import Loading from '@/src/app/components/loading/Loading';


const page = async () => {

    return (
        <Suspense fallback={<Loading />}>
            <Questionnaire />
        </Suspense>
    )
}

export default page