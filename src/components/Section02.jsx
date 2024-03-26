import React from 'react';

const Section02 = () => {
    return (
        <div className="section02">
            <div className='bg'></div>
            <div className="cont">
                <span className='tag'>EVENT</span>
                <div className="tit_wrap"></div>
                <span className="img">
                    <img src={process.env.PUBLIC_URL + "img/section02_backText.png"} alt="background-text" /> 
                </span>
                <div className="list">
                    <div className="menu"></div>
                    <div className="banner"></div>
                </div>
            </div>
            
        </div>
       
        
    );
};

export default Section02;