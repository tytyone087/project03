import React, { useState } from 'react';
import { GiHearts } from "react-icons/gi";  
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Section02 = () => {
    const [swiper, setSwiper] = useState(null); // 슬라이드용

    const PrevSlide = () => {
        swiper?.slidePrev(); // "이전" 버튼을 누르면 이전 슬라이드로 이동합니다.
    }
    
    const NextSlide = () => {
        swiper?.slideNext(); // "다음" 버튼을 누르면 다음 슬라이드로 이동합니다.
    }

    return (
        <div className="section02">
            <div className='bg'></div>
            <div className="cont">
                <span className='tag'>EVENT<GiHearts className='heart'/></span>
                <div className="tit_wrap">
                    <h2 className='mtit'>2024 여행가는 달</h2>
                     <p className='stit'>다양한 혜택으로 가득한 여행가는 달과 함께<br />설레임을 가득안고 여행을 떠나보세요.</p>
                     <span className='day'>2024. 2. 20. ~ 2024. 3. 31.</span>
                </div>
                <span className="img">
                    <img src={process.env.PUBLIC_URL + "img/section02_backText.png"} alt="background-text" /> 
                </span>
                <div className="list">
                    <div className="menu"><p>숨은 여행 혜택찾기</p></div>
                    <div className="banner">
                        <Swiper 
                            modules={[Navigation]} 
                            spaceBetween={20}
                            slidesPerView={3}
                            speed={1000}
                            navigation={{
                                nextEl:'.swipernext',
                                prevEl:'.swiperprev'
                            }}
                            className='eventBox'
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL + './img/eventslide04.png'} alt="숙박할인" /></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + './img/eventslide03.png'} alt="숙박할인" /></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + './img/eventslide01.png'} alt="숙박할인" /></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + './img/eventslide02.png'} alt="숙박할인" /></SwiperSlide>
                        </Swiper>
                        <div className='pagination'>
                            <div className="swipernext" onClick={PrevSlide} ></div>
                            <div className="swiperprev" onClick={NextSlide} ></div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Section02;