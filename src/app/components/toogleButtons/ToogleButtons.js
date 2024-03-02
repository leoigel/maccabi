'use client'
import React from 'react'
import ButtonCheckBox from '../buttonCheckBox/ButtonCheckBox';
import useSelectButton from '../../hooks/useSelectButton';

const ToggleButtons = ({ currentQuestion, activeButton, setActiveButton }) => {
    const { q1, q2 } = currentQuestion;
    const { id, updateID } = useSelectButton(activeButton);


    const handleButtonClick = (idT) => {
        updateID(idT)
        setActiveButton(idT)
    };

    return (
        <>
            <ButtonCheckBox text={q1.text} active={id === q1.id} onClick={() => handleButtonClick(q1.id)} />
            <ButtonCheckBox text={q2.text} active={id === q2.id} onClick={() => handleButtonClick(q2.id)} />
        </>
    );
};

export default ToggleButtons;