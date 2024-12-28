"use client"
import React, {
    useState,
    useRef,
    useEffect
} from 'react'
import '../../src/CSS/ShopCategory.css'
import allProducts from '../../src/data/allProducts'
import Item from '../../components/Item/Item'
import Banner from '../../components/Banner/Banner'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImageData } from 'next/image'
import { useParams } from 'next/navigation'
const ShopCategory = () => {

    interface productsObj {
        id: number;
        name: string;
        category: string;
        image: StaticImageData;
        new_price: number;
        old_price: number;
    }

    const [item, setItem] = useState<StaticImageData[] & string[] & number[]>([]);
    const [menu, setMenu] = useState('false');
    const list1 = useRef<HTMLDivElement | null>(null);
    const list2 = useRef<HTMLDivElement | null>(null);
    const list3 = useRef<HTMLDivElement | null>(null);


    const { categoryId } = useParams();
    // const categoryId: string = category.categoryId;

    const handleDropdown = () => {

        switch (menu) {
            case 'false':
                setMenu('true')
                break;
            case 'true':
                setMenu('false')
                break;
        }
    }

    const activation = (elementRef: React.RefObject<HTMLElement>) => {
        if (elementRef.current) {
            switch (elementRef.current.dataset.active) {
                case 'false':
                    elementRef.current.dataset.active = 'true'
                    break;
                case 'true':
                    elementRef.current.dataset.active = 'false'
                    break;
            }

        }
    }

    const productArr: productsObj[] = allProducts;

    const selectSrcAlt = () => {
        let itemArray: string[] & StaticImageData[] & number[] = [];
        for (let i = 0; i < 3; i++) {
            const randomSelection: number = Math.round(Math.random() * 5);

            // Filter products by category
            const filteredProducts = productArr.filter(product => product.category === categoryId);
            // Select a random product from filtered products
            const chosenProduct = filteredProducts[randomSelection];

            itemArray.push(chosenProduct.image);
            itemArray.push(chosenProduct.name);
            itemArray.push(chosenProduct.id);
        }
        setItem(itemArray);
    };



    useEffect(() => {
        selectSrcAlt();

    }, [categoryId])

    return (
        <div className="shop-category">
            <div className="category-banner">
                <Banner
                    btnText="Shop Now"
                    section={categoryId}
                    src={item[0]}
                    alt={item[1]}
                    id={item[2]}
                />
            </div>
            <div className="category-index-sort">
                <p><span>Results 1-6 </span>out of 18</p>

                <div className="category-sort-menu">
                    <button
                        onClick={() => handleDropdown()}
                    >
                        Filter
                        {(menu === 'true') ?
                            <FontAwesomeIcon
                                className="menu-icon"
                                icon={faAngleUp} />
                            : <FontAwesomeIcon
                                className="menu-icon"
                                icon={faAngleDown} />}
                    </button>
                    <div
                        className="dropDownList"
                        data-active={menu}
                    >
                        <div
                            ref={list1}
                            className="list" data-active="false"
                            onClick={() => activation(list1)}
                        >Price</div>
                        <div
                            ref={list2}
                            className="list" data-active="false"
                            onClick={() => activation(list2)}
                        >Date</div>
                        <div
                            ref={list3}
                            className="list" data-active="false"
                            onClick={() => activation(list3)}
                        >Alphabetically</div>
                    </div>
                </div>
            </div>
            <div className="category-products">
                {/* If more products are going to be rendered make sure to only render the ones that hasn't been rendered already in a new div - find a solution to reduce load time and make sense */}
                {
                    productArr.filter((product) => {
                        return product.category === categoryId
                    }).map((product, key) => {
                        return (
                            <Item
                                id={product.id}
                                active="true"
                                key={key}
                                name={product.name}
                                src={product.image}
                                alt={product.name}
                                newPrice={product.new_price}
                                oldPrice={product.old_price}
                            />
                        )
                    })
                }
            </div>
            <button
                className="basic-button"
            >Load More</button>
        </div>
    )
}

export default ShopCategory;