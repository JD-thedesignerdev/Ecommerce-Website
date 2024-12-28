"use client"
import React from 'react'
// import { usePathname } from 'next/navigation'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import allProducts from '../../src/data/allProducts';
import ProductNav from '../../components/ProductNav/ProductNav';

import { useParams } from 'next/navigation';
import Footer from '../../components/Footer/Footer';

const Product = () => {

    const { productId } = useParams();
    // this is logging undefine fix it
    const product = allProducts.find(el => `${el.id}` == productId);
    // console.log(product);

    return (
        <div>

            <header>
                <ProductNav category={product.category} id={product.id} />
            </header>



            <ProductDisplay
                category={product.category}
                name={product.name}
                oldPrice={product.old_price}
                newPrice={product.new_price}
                src={product.image}
                alt={product.name} />


            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Product