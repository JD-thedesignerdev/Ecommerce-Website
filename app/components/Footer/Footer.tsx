"use client"
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Instagram from '../../public/assets/icons/Instagram'
import Pinterest from '../../public/assets/icons/Pinterest'
import Facebook from '../../public/assets/icons/Facebook'
const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-logo">
                <FontAwesomeIcon icon={faShoppingBag} />
                <p>E-Shop™</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-socials">
                <div className="footer-socials-container">
                    <Instagram width="50px" height="50" />
                </div>
                <div className="footer-socials-container">
                    <Pinterest width="50px" height="50" />
                </div>
                <div className="footer-socials-container">
                    <Facebook width="50px" height="50" />
                </div>

            </div>
            <div className="footer-copyright">

                <p>copyright © E-Shop 2024 - all rights reserved</p>
            </div>
        </section>
    )
}

export default Footer