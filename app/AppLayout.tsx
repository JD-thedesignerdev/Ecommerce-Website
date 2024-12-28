"use client"
import React, { useState, useEffect } from 'react';
import './src/CSS/App.css'
import Navbar from './components/Navbar/Navbar';
// import { Outlet, ScrollRestoration } from 'react-router-dom'; change to next


// TODO PROPERLY FIX THE ROUTING TO SATISFY NEXTJS 
interface Props {
  children: React.ReactNode;
}
const AppLayout: React.FC<Props> = ({ children }) => {
  //  next js is annoying me tell chatgpt to do it
  const [active, setActive] = useState<string>("");
  const [scrolledY, setscrolledY] = useState<number>(0);
  const [frameWidth, setFrameWidth] = useState(0);

  useEffect(() => {
    if (window !== undefined) {
      setFrameWidth(window.innerWidth);
    }
  }, [])

  const handleScroll = () => {
    if (scrolledY < window.scrollY) {
      setActive("false");
      setscrolledY(window.scrollY);
    } else if (window.scrollY < scrolledY) {
      setActive("true");
      // the process is skipped once when scrollY is in the useEffect() dependency array, 
      setscrolledY(window.scrollY);

    }


  }


  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrolledY])

  const handleResize = () => {
    if (window !== undefined) {
      setFrameWidth(window.innerWidth);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [frameWidth])

  const positionCursor = (e: MouseEvent) => {
    if (e) {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    }
  }

  useEffect(() => {
    document.documentElement.addEventListener('mousemove', positionCursor);
    return () => {
      document.documentElement.removeEventListener('mousemove', positionCursor);
    }
  }, []);


  return (
    <>
      {/* <ScrollRestoration /> */}
      {/* <CartContext.Provider value={{ cartObj, setCartObj }}> */}
      <nav>
        {
          scrolledY === 0
            ?
            <Navbar frameWidth={frameWidth} active="true" />
            :
            <Navbar frameWidth={frameWidth} active={active} />
        }
      </nav>
      <main>
        {children}
      </main>
    </>

  )

}

export default AppLayout
