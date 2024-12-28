// import React from 'react'
"use client"
import './Hero.css';
import Card from '../Card/Card';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import Link from 'next/link';
import Cursor from '../Cursor/Cursor';
import PenCircle from '../Svgs/PenCircle';

import menJumper from "../../public/assets/imgs/men-jumper.jpg"
import womenLeggings from "../../public/assets/imgs/women-leggings.jpg"
import womenBlouse from "../../public/assets/imgs/women-blouse.jpg"
import menShirt from "../../public/assets/imgs/men-shirt.jpg"
import womenDress from "../../public/assets/imgs/women-dress.jpg"
import kidJeans from "../../public/assets/imgs/kids-jeans.jpg"
const Hero = () => {

    //  TODO: Add drawing svgs on card and on the line "enjoy eshops superb clothing"
    // console.log()

    const content = [" COLLECT E-SHOP's POPULAR CLOTHING IMEDIATELY!", " COLLECT E-SHOP's POPULAR CLOTHING IMEDIATELY "]

    return (
        <section className="hero">
            <div className="hero-left">
                <header>
                    <h2 className="thin">E-Shop Offers High quality products</h2>
                    <h2 className='thick'>E-Shop Offers High quality products</h2>

                </header>
                <div className="penCircle"><PenCircle
                    stroke="rgb(0,120,180)"
                /></div>
                <p>
                    Enjoy our wide range of superb clothing🤩
                </p>
                <button><Link href="/">Shop Now !</Link></button>
                <div className="scroll-block">
                    <InfiniteScroll content={content} />
                </div>

            </div>
            <section className="background-cards">
                <div className="Card1">
                    <Card src={menJumper} alt='White, cozy,comfortable jumper typically worn by men.' />
                </div>
                <div className="Card2">
                    <Card src={womenLeggings} alt='Comfortable, black leggings to highlight the legs beauty.Typically worn by women.' />
                </div>
                <div className="Card3">
                    <Card src={womenBlouse} alt='Comfortable, green and appealing blouse for women.' />
                </div>
                <div className="Card4">
                    <Card src={menShirt} alt='Light, white shirt for men.' />
                </div>
                <div className="Card5">
                    <Card src={womenDress} alt='Beautiful, blue dress for women.' />
                </div>
                <div className="Card6">
                    <Card src={kidJeans} alt='Comfortable and light pants for kids.' />
                </div>
            </section>
            {/* Make the cursor either dispear when hovered of hero and reappear(preferably smaller) or make it's position fixed */}
            <Cursor style="bigBlue" />
        </section>
    )
}

export default Hero