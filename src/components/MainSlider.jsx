import React, { useState, useRef } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from '../../src/data';


const MainSlider = () => {
    const [swiperIndex, setSwiperIndex] = useState(0); // 페이지네이션용
    const [swiper, setSwiper] = useState(null); // 슬라이드용
    const [textSwiperIndex, setTextSwiperIndex] = useState(0); // 텍스트 슬라이드용
    const [textSwiper, setTextSwiper] = useState(null); // 텍스트 슬라이드용의 Swiper 인스턴스
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false); // Track autoplay state
    const [isActive, setIsActive] = useState(false); // Track active state for button

    const swiperRef = useRef(null);

    const handlePrev = () => {
        swiper?.slidePrev();
        textSwiper?.slidePrev();
    }

    const handleNext = () => {
        swiper?.slideNext();
        textSwiper?.slideNext();
    }

    const handleAutoplayToggle = () => {
        if (swiper && swiper.autoplay && textSwiper && textSwiper.autoplay) {
            if (swiper.autoplay.running && textSwiper.autoplay.running) {
                textSwiper.autoplay.stop();
                swiper.autoplay.stop();
                setIsAutoplayPaused(true);
            } else {
                textSwiper.autoplay.start();
                swiper.autoplay.start();
               
                setIsAutoplayPaused(false);
            }
        }
        // mainShowcase 클래스에 active 클래스를 추가/제거
        setIsActive(!isActive);
    };

    return (
        <div id='mainContainerPC' className={`mainShowcase ${isActive ? 'active' : ''}`}>
            <div className="img_wrap">
                <Swiper
                    modules={[Navigation, Pagination,  Autoplay]}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    loop={true}
                    speed={1500}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
                    onSwiper={(swiper) => { setSwiper(swiper); swiperRef.current = swiper }}
                    className='mainSwiper'
                >
                    {data.map((data, i) => (
                        <SwiperSlide key={i}><img src={process.env.PUBLIC_URL + data.img} alt={data.textblod} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
             <div className="cont">
                <Swiper
                    
                    modules={[Navigation, Pagination,  Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    speed={1500}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}
                    onActiveIndexChange={(e) => setTextSwiperIndex(e.realIndex)}
                    onSwiper={(swiper) => { setTextSwiper(swiper); swiperRef.current = swiper }}
                    className='textSlide'
                    >
                     {data.map((data, i) => (
                        <SwiperSlide key={i}>
                            <div className="tit_wrap">
                                <em>{data.textT}</em>
                                <strong>{data.textblod}</strong>
                                <a href={data.textLInk}>자세히 보기</a>
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> 
            <div className="page_box">
                <div className="page">
                    <div className="swiper_progress_bar">
                        <div className="slider_bar">
                            <div className="fill"></div>
                        </div>
                    </div>
                    <div className="swiper-pagination">
                        <span>0{swiperIndex + 1}</span>
                        <span>/</span>
                        <span>0{data.length}</span>
                    </div>
                    <div className="swiper_btn">
                        <div className="swiperNextBtn" onClick={handlePrev}></div>
                        <div className="swiperPrevBtn" onClick={handleNext}></div>
                        <div className="Btn-auto" onClick={handleAutoplayToggle} >
                            {/* Use className to style the button */}
                        
                            <div className='btn_stop'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainSlider;