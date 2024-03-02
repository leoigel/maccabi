'use client'
import React from 'react'
import stlyes from './buttonBack.module.css';
import { useRouter } from "next/navigation";

export const ButtonBack = ({ pathname }) => {

    const router = useRouter()
    const handleBack = () => {
        router.back()
    }
    return (
        <div onClick={handleBack} className={stlyes.button}>
            <span></span>
            <p>חזרה</p>
        </div>
    )
}
