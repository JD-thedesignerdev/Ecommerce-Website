"use client"
import React, { useRef } from 'react'
// import { targetElem } from '../../utilities/function/targetElem';
import Image, { StaticImageData } from 'next/image';
import './Card.css';
interface CardProps {
    src: StaticImageData,
    alt: string,
    active?: boolean | string,
}
import './Card.css'
const Card: React.FC<CardProps> = ({ src, alt, active }) => {
    const card = useRef<HTMLImageElement | null>(null);

    return (
        <div className="card-container" >
            <div>
                <Image
                    width="200"
                    height="310"
                    className="pic" src={src} alt={alt}
                />
            </div>
            <button>Shop Now</button>

        </div>
    )
}

export default Card