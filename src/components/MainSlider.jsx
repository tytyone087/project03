import React, { useState, useRef } from 'react';
import { Navigation, A11y, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from '../../src/data';

const MainSlider = () => {
    const [swiperIndex, setSwiperIndex] = useState(0); // 페이지네이션용
    const [swiper, setSwiper] = useState(null); // 슬라이드용
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false); // Track autoplay state
    // const [isActive, setIsActive] = useState(false); // Track active state for button

    const swiperRef = useRef(null);

    const handlePrev = () => {
        swiper?.slidePrev();
    }

    const handleNext = () => {
        swiper?.slideNext();
    }

    const handleAutoplayToggle = (swiper) => {
        const { autoplay } = swiper;
            if (autoplay) {
                autoplay.running ? autoplay.stop() : autoplay.start();
                setIsAutoplayPaused(!autoplay.running);
            }
    };

    return (
        <div id='mainContainerPC' className='mainShowcase'>
            <div className="img_wrap">
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    loop={true}
                    speed={1500}
                    autoplay={{ delay: 1000, disableOnInteraction: true }}
                    onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
                    onSwiper={(swiper) => { setSwiper(swiper); swiperRef.current = swiper }}
                    className='mainSwiper'
                >
                    {data.map((data, i) => (
                        <SwiperSlide key={i}><img src={process.env.PUBLIC_URL + data.img} alt={`Slide ${i+1}`} /></SwiperSlide>
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