import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

  // 3가지문법
  //window.scrollTo(x좌표, y좌표) 
  //window.scrollTo({top, left, behavior})
  //window.scroll( top, left, behavior );
    }
    const [showButton, setShowButton] = useState(false);
    const scrollTop=document.documentElement.scrollTop;
    const scrollHeight=document.documentElement.scrollHeight;
    const clientHeight=document.documentElement.clientHeight;
    


    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500 ) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
            if (  window.scrollY >= 3155 /* clientHeight >= scrollHeight - scrollTop */){
                setShowButton(false)
            }
            
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])
    return (
        <>
            {showButton &&
                <div className='main_scroll'>
                    <div id="top">
                        <Link onClick={scrollToTop}></Link>        
                    </div>
                </div>
            }
        </>
    );
};

export default Top;