'use client'
import React, {
    useRef,
    useState
} from 'react'
import './ProductDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faStar } from '@fortawesome/free-solid-svg-icons'
import Image, { StaticImageData } from 'next/image'
import { appendCart } from '../../Redux/Cart/cartSlice'
import { useAppDispatch } from '../../Redux/hooks'
interface Props {

    name: string,
    category: string,
    oldPrice: number,
    newPrice: number,
    src: StaticImageData,
    alt: string,
}
const ProductDisplay: React.FC<Props> = ({ src, alt, name, oldPrice, newPrice, category }) => {
    const mainImg = useRef<HTMLImageElement | null>(null);
    // remember to use Redux for state management
    // const { cartObj, setCartObj } = useContext(CartContext);
    const dispatch = useAppDispatch();


    const [displayReminder, setDisplayReminder] = useState(false);
    const [size, setSize] = useState<string | null>(null);
    const smallRef = useRef<HTMLDivElement | null>(null);
    const mediumRef = useRef<HTMLDivElement | null>(null);
    const largeRef = useRef<HTMLDivElement | null>(null);
    const extraLargRef = useRef<HTMLDivElement | null>(null);
    const extraExtraLargRef = useRef<HTMLDivElement | null>(null);

    const allSizeRefs = [smallRef, mediumRef, largeRef, extraLargRef, extraExtraLargRef];


    const productSize = (Size: string, elementRef: React.RefObject<HTMLDivElement | null>) => {
        allSizeRefs.forEach((ref) => {
            if (ref.current) {
                return (
                    ref.current.dataset.active = "false"
                )
            }
        }
        );

        if (size != Size && elementRef.current) {
            setSize(Size);
            elementRef.current.dataset.active = "true";
        }
    }

    const addToCart = () => {

        if (size) {
            dispatch(appendCart(
                {
                    src: src,
                    alt: alt,
                    name: name,
                    price: newPrice,
                    size: size,

                }
            ))


        } else {
            setDisplayReminder(true);
        }
    }

    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <FontAwesomeIcon className="productDisplay-arrowUp"
                        icon={faArrowUp} />
                    <Image src={src} alt={alt} />
                    <Image src={src} alt={alt} />
                    <Image src={src} alt={alt} />
                    <Image src={src} alt={alt} />
                    <FontAwesomeIcon
                        className="productDisplay-arrowDown"
                        icon={faArrowDown} />
                </div>
                <div className="productDisplay-img">
                    <Image className="productDisplay-main-img"
                        ref={mainImg}
                        src={src}
                        alt={alt}
                    />
                </div>
            </div>
            <div className="productDisplay-right">
                <h1>{name}</h1>
                <div className="productDisplay-right-star">
                    <FontAwesomeIcon icon={faStar} className="productDisplay-icon" />
                    <FontAwesomeIcon icon={faStar} className="productDisplay-icon" />
                    <FontAwesomeIcon icon={faStar} className="productDisplay-icon" />
                    <FontAwesomeIcon icon={faStar} className="productDisplay-icon" />
                    <FontAwesomeIcon icon={faStar} />
                    <p>(225)</p>
                </div>
                <div className="productDisplay-right-prices">
                    <div className="oldPrice">${oldPrice}</div>
                    <div className="productDisplay-right-price-new">${newPrice}</div>
                </div>
                <div className="productDisplay-right-description">Comfortable, black leggings to highlight the legs beauty.Typically worn by women.</div>

                <div className="productDisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-size-container">
                        <div
                            data-active="false"
                            ref={smallRef}
                            onClick={() => productSize('Small', smallRef)}
                            className="productDisplay-size">S</div>
                        <div
                            data-active="false"
                            ref={mediumRef}
                            onClick={() => productSize('Medium', mediumRef)} className="productDisplay-size">M</div>
                        <div
                            data-active="false"
                            ref={largeRef}
                            onClick={() => productSize('Large', largeRef)} className="productDisplay-size">L</div>
                        <div
                            data-active="false"
                            ref={extraLargRef}
                            onClick={() => productSize('Extra Large', extraLargRef)} className="productDisplay-size">XL</div>
                        <div
                            data-active="false"
                            ref={extraExtraLargRef}
                            onClick={() => productSize('Extra Extra Large', extraExtraLargRef)} className="productDisplay-size">2XL</div>
                    </div>
                </div>
                <div className="productDisplay-related">
                    <button
                        onClick={addToCart}
                    >Add to Cart</button>
                    {
                        displayReminder &&

                        <p> Please select size before continuing!</p>
                    }
                    <div className="productDisplay-related-texts">
                        <p className="productDisplay-right-category"><span>Category :</span> {category}, jackets and shirts</p>
                        <p className="productDisplay-right-category"><span>Tags :</span> modern, stylish clothing </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDisplay