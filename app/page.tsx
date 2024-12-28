// import React from 'react'
"use client"
import Hero from './components/Hero/Hero';
// import Offer from './components/Offer/Offer';
import Popular from './components/Popular/Popular';
import Collection from './components/Collection/Collection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const Shop = () => {
    return (
        <section>

            <Hero />
            <main>
                <Popular />
                {/* <Offer />  it doesn't look good and ruins the layout*/}
                <Collection />
                <Newsletter />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default Shop