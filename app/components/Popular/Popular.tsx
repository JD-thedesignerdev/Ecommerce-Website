'use client'
import React, { useState } from 'react'
import './Popular.css';
import Item from '../Item/Item';
import allProducts from '../../src/data/allProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


// interface myObject {
//     id: string,
//     name: string,
//     image: string,
//     new_price: string
//     old_price: string
// }
const Popular = () => {
    // const data: any[] = allProducts;
    // I was going to let the use chose the category to be seen and dynamically type the heading and insert the items.
    const [selectedCategory, selectCategory] = useState('women');

    return (
        <section className="popular">
            <h1>Popular in {selectedCategory}</h1>
            <div className="selection-btns">
                <button>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className="popular-selections">
                {/*
                 make cool picture hover filter effect using invert()
                 
                 If alot of products it's probably better to use grid rather than display flex or split it up some how
                */}
                {
                    allProducts.filter((product) => {
                        return product.category === selectedCategory
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
        </section>
    )
}

export default Popular