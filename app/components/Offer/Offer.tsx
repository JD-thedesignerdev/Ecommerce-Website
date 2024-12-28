'use client'
import React from 'react'
import './Offer.css'
import Card from '../Card/Card'

const Offer = () => {
    return (
        <div className="offer">
            <div className="offer-texts">
                {/* I will eventually try and make this have a cool 3d effect */}
                <h1>Limited time discounts currently available</h1>
                <p>Make sure to take advantage of our discounts while you still can. Offer ends soon.</p>
                {/* this button probably should be a link */}
                <button>Shop Now</button>
            </div>
            <div className="offer-card">
                <Card src="src/assets/imgs/women-dress.jpg" alt="Beautiful, blue dress for women." active="true" />
            </div>
        </div>
    )
}

export default Offer