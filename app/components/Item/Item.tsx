import React, { useRef } from 'react'
import { targetElem } from '../../utilities/function/targetElem';
import './Item.css';
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image';
interface Props {
    id: number,
    name: string,
    src: StaticImageData,
    alt?: string,
    newPrice: number,
    oldPrice: number,
    width?: string,
    height?: string,
    active?: string,
}

const Item: React.FC<Props> = ({ name, src, alt, newPrice, oldPrice, width, height, active, id }) => {
    const imgFilter = useRef<HTMLImageElement | null>(null)

    const linkToPath = `/product/${id}`;


    return (
        <div className="item">
            <Link href={linkToPath}>
                <div className="item-imgs">
                    <Image
                        className="img1"
                        // width={width}
                        // height={height}
                        src={src}
                        alt={alt}
                        onMouseMove={(event) => { targetElem(event, imgFilter) }}
                    />
                </div>

                <h1>{name}</h1>
                <div className="item-texts">

                    <p>${newPrice} aud</p>
                    <p className="oldPrice">
                        ${oldPrice}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Item