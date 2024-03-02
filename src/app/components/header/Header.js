'use client'
import Image from 'next/image';
import logo from '@/public/images/bg/logo.svg';
import stlyes from './header.module.css';
import { ButtonBack } from '../buttonBack/ButtonBack';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
export default function Header() {
    const pathname = usePathname();
    const [path, setPath] = useState(null)



    useMemo(() => {
        setPath(pathname)
    }, [pathname])


    return (
        <header className={stlyes.header}>
            {path !== '/' && <ButtonBack />}
            <Image
                src={logo} // Default image
                alt="Descriptive text for the image"
                width={185}
                height={82}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                responsive="true"
            />
        </header>
    );
}
