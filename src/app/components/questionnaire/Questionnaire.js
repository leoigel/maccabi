'use client'
import React, { Suspense } from 'react'
import styles from './questionnaire.module.css';
import { useState, useEffect, useMemo } from 'react';
import ButtonForward from '../buttonForward/ButtonForward';
import ToggleButtons from '../toogleButtons/ToogleButtons';
import { useSearchParams } from 'next/navigation';
import useSelectButton from '../../hooks/useSelectButton';




const Questionnaire = () => {
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [url, setUrl] = useState('')
    const [activeButton, setActiveButton] = useState(null);
    const searchParams = useSearchParams()
    const current_page = searchParams.get('current_page');
    const { id } = useSelectButton(null);

    const questionOne = {
        id: 1,
        title: `האם אתם חברי מכבי?`,
        q1: {
            id: 1,
            text: `כן, אני חבר/ת מכבי`
        },
        q2: {
            id: 2,
            text: `לא, עדיין לא`
        }
    }
    const questionTwo = {
        id: 2,
        title: (
            <>
                האם בני המשפחה
                <br />
                שלכם גם במכבי?
            </>
        ),
        q1: {
            id: 1,
            text: `כן, גם הם חברי מכבי'`
        },
        q2: {
            id: 2,
            text: `לא, הם עדיין לא`
        }
    }
    useMemo(() => {
        if (currentQuestion.id === 1 && activeButton === 1 && !current_page) {
            setUrl('/3/positive?current_page=2')
        }
        if (currentQuestion.id === 2 && activeButton === 1 && current_page) {
            setUrl('/lastPage?current_answer=yes')
        }
        if (currentQuestion.id === 2 && activeButton === 2 && current_page) {
            setUrl('/lastPage?current_answer=no')
        }
    }, [currentQuestion.id, activeButton])
    useMemo(() => {
        if (!current_page) {
            setCurrentQuestion(questionOne)
        } else {
            setCurrentQuestion(questionTwo)
        }
    }, [current_page])


    return (

        <div className={styles.wrapperStage2} >
            <h3 >{currentQuestion.title}</h3>
            <div className={styles.toggleFriendMaccabi}>
                <ToggleButtons currentQuestion={currentQuestion} activeButton={id} setActiveButton={setActiveButton} />
            </div>

            <ButtonForward url={url} />
        </div>

    )
}

export default Questionnaire