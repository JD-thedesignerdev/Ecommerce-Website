import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Collect Exclusive Deals, Subscribe!</h1>
            <p>Subscribe to E-Shop's Newsletter to stay updated. Be the first to be informed of our discounts and provided exclusive deals😉</p>
            <div className="newsletter-input-btn">
                <input
                    placeholder='Enter your email here e.g. user@example.com'
                    type="email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter