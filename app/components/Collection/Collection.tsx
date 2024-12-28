'use client'
import React, { useState } from 'react'
import './Collection.css'
import Item from '../Item/Item'
import newCollections from '../../src/data/newCollections'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Collection = () => {
    const [selectedCategory, selectCategory] = useState('women');
    return (
        <section className="collection">
            <h1>NEW COLLECTIONS</h1>
            <div className="collection-selection-btns">
                <button>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div className="collection-selections">
                {
                    newCollections.filter((product) => {
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

export default Collection