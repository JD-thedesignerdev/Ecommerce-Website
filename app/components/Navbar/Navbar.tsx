"use client"
import React, {
    // useContext,
    // useEffect,
    useRef
} from 'react'
// import { useCartContext } from '../../context/CartContext'
import Link from 'next/link'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation';
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '../../Redux/hooks';
// import { useStore } from 'react-redux';
// import { useParams } from 'next/navigation';

interface NavProps {
    frameWidth: number;
    active: string;
}

const CartLength = () => {
    const cartLength = useAppSelector((state) => state.cart.length, shallowEqual);
    return (
        <div className="nav-cart-count">
            {cartLength}
        </div>
    )
}

const Navbar: React.FC<NavProps> = ({ frameWidth, active }) => {

    const param = useParams();
    const ShopTab = useRef<HTMLLIElement>(null);
    const kidsTab = useRef<HTMLLIElement>(null);
    const womenTab = useRef<HTMLLIElement>(null);
    const menTab = useRef<HTMLLIElement>(null);

    const allTabs = [ShopTab, kidsTab, womenTab, menTab];
    const activeTab = (tab?: React.RefObject<HTMLLIElement>) => {
        const Tab = tab?.current;
        allTabs.forEach((el) => {
            if (el.current?.dataset.active === "true") {
                el.current.dataset.active = "false"
            }
        })
        if (Tab) {
            Tab.dataset.active = "true";
        }
    }

    // const activateTab = ()=>{
    //     switch (){
    //         default:{
    //             el
    //         }
    //     }
    // }

    return (
        <section className="navbar" data-active={active || "false"}>
            <div className="nav-logo" >
                <Link href="/" onClick={() => { activeTab() }}>
                    <FontAwesomeIcon icon={faShoppingBag} />

                    <p>E-SHOP</p>
                </Link>
            </div >
            <ul className="nav-menu">
                <li
                    data-active="false"
                    ref={ShopTab}

                >
                    <Link
                        href="/">Shop</Link></li>
                <li
                    data-active="false"
                    ref={kidsTab}

                >
                    <Link
                        href="/category/kids">Kids</Link></li>
                <li
                    data-active="false"
                    ref={womenTab}
                >
                    <Link
                        href="/category/women">Women</Link></li>
                <li data-active="false"
                    ref={menTab}

                ><Link
                    href="/category/men">Men</Link>
                </li>
            </ul>
            <div className="nav-login-cart">
                <button className="nav-signUp">
                    <Link href="/signup">Sign Up</Link>
                </button>
                <button className="nav-login">
                    <Link href="/login">Login</Link>
                </button>
                <button className="nav-cart">
                    <Link href="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <CartLength />
                    </Link>
                </button>

                {
                    frameWidth <= 900 &&

                    <button> <FontAwesomeIcon icon={faBars} /> </button>
                }


            </div>

        </section>
    )
}

export default Navbar