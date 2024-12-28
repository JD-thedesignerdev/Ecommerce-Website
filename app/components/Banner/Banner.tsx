"use client"
import React,
{
    useRef,
    // useEffect
} from 'react'

import './Banner.css'
import BackgroundWords from '../Svgs/BackgroundWords'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TouchSensor from '../TouchSensor/TouchSensor';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Props {
    section: string | string[],
    btnText: string,
    src: StaticImageData,
    alt: string,
    id: number,
    // I might include price on images
}


const Banner: React.FC<Props> = ({ section, src, btnText, alt, id }) => {

    const imgRef = useRef<HTMLImageElement | null>(null);


    return (
        <div className="banner">
            <div className="bgWords">
                <BackgroundWords viewBox="0 0 1440 600" height="600" fill="rgb(0,120,180)" />
            </div>

            <div className="banner-texts">
                <h1>Become Versatile</h1>
                <p>{`Equip yourself with insightful clothing made for ${section}`}</p>
                <button className="banner-btn">
                    <Link href={`/product/${id}`}>{btnText} <FontAwesomeIcon
                        className="icon" icon={faArrowRight} />
                    </Link>
                </button>
            </div>

            <div
                className="banner-img"
            >
                <Image
                    ref={imgRef}
                    src={src}
                    alt={alt}
                />
                <div className="sensor">
                    <TouchSensor elementRef={imgRef} />
                </div>

            </div>

        </div>
    )
}

export default Banner