"use client"
import React,
{
    // useEffect,
    // useContext
} from 'react'
import '../src/CSS/Cart.css'
import { useAppSelector } from '../Redux/hooks';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
const Cart = () => {

    const cart = useAppSelector((state) => state.cart);
    const priceArr = [];
    const items = cart.map((cartItem) => {
        priceArr.push(cartItem.price);
        return (
            <div className="cartDisplayContainer">
                <Image src={cartItem.src} alt={cartItem.alt} />
                <div className="cartDisplay-texts">
                    <h1>{cartItem.name}</h1>
                    <h2>{`Size: ${cartItem.size}`}</h2>
                    <p>{cartItem.price}</p>
                </div>
            </div>
        )
    })

    const total = priceArr.forEach((value: number) => value + 0);
    console.log(total);

    return (
        <section className="Cart">
            <header>
                <h2>YOUR CART</h2>

            </header>
            {items}
            <div className="checkout">

            </div>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default Cart;
