import React from 'react'
import Link from 'next/link'
// rememeber to install fontawesome dependencies
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductNav.css'
interface Props {
    id: number,
    category: string,
}
const ProductNav: React.FC<Props> = ({ id, category }) => {
    return (
        <nav className="productNav">
            <ul>
                <li>
                    <Link href="/shop">/shop</Link>
                    <FontAwesomeIcon icon={faAngleRight} />
                </li>
                <li>
                    <Link href={`/category/${category}`}>{`/${category}`}
                    </Link>
                    <FontAwesomeIcon icon={faAngleRight} />
                </li>
                <li>/product/{id}</li>
            </ul>
        </nav>
    )
}

export default ProductNav