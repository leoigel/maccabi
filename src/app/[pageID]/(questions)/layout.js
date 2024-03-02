
import React from 'react';
import BarProcess from '../../components/barProcess/BarProcess';
import Wrapper from '../../components/wrapper/Wrapper';


const layout = ({ children }) => {
    return (

        <Wrapper>
            <BarProcess />
            {children}
        </Wrapper>
    )
}

export default layout