import React, { useState, useRef, useEffect } from 'react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from '../data/data';


const MainSlider = () => {
    const [swiperIndex, setSwiperIndex] = useState(0); // 페이지네이션용
    const [swiper, setSwiper] = useState(null); // 슬라이드용
    const [textSwiperIndex, setTextSwiperIndex] = useState(0); // 텍스트 슬라이드용
    const [textSwiper, setTextSwiper] = useState(null); // 텍스트 슬라이드용의 Swiper 인스턴스
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false); // Track autoplay state 
    const [isActive, setIsActive] = useState(false); // Track active state for button
    const [bgColor, setBgColor] = useState();
    const [autoplayProgress, setAutoplayProgress] = useState(0); // Autoplay progress

    const swiperRef = useRef(null);   

    useEffect(() => {
        const interval = setInterval(() => {
            if (swiper && swiper.autoplay && textSwiper && textSwiper.autoplay) {
                const progress = (swiper.autoplay.progress * 100).toFixed(2);
                setAutoplayProgress(progress);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [swiper, textSwiper]);


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
        <div className={`mySwiper mainShowcase ${isActive ? 'active' : ''}`}  style={{ background: bgColor }}>
            <div className="cont">
                 <Swiper
                    
                    modules={[Navigation, Pagination,  Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    speed={1500}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onActiveIndexChange={(e) => setTextSwiperIndex(e.realIndex)}
                    onSwiper={(swiper) => { setTextSwiper(swiper); swiperRef.current = swiper }}
                    className='textSlide'
                    >
                     {data.map((data, i) => (                      
                        <SwiperSlide key={i}>
                            <div className="tit_wrap">
                                <em>{data.textT}</em> 
                                 <strong>{data.textblod}</strong> 
                                <a href={data.textLink}>자세히 보기</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper> 
            </div> 
            <div className="img_wrap">
                 <Swiper
                    modules={[Navigation, Pagination,  Autoplay]}
                    spaceBetween={30}
                    slidesPerView={'auto'}
                    loop={true}
                    speed={1500}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
                    onSwiper={(swiper) => { setSwiper(swiper); swiperRef.current = swiper }}
                    onSlideChange={(e) => {
                        const realIndex = e.realIndex;
                        const bgColors = ['rgb(255, 238, 242)','rgb(255, 247, 227)', 'rgb(255, 242, 245)', 'rgb(248, 206, 197)', 'rgb(247, 239, 230)','rgb(240, 245, 250)','rgb(250, 249, 237)','rgb(241, 250, 240)','rgb(242, 235, 255)'];
                        setBgColor(bgColors[realIndex]);
                    }}
                    className='mainSwiper'
                >
                    {data.map((data, i) => (
                        <SwiperSlide key={i}><img src={process.env.PUBLIC_URL + data.img} alt={data.textblod} /></SwiperSlide>
                    ))}
                </Swiper> 
            </div>
            <div className="page_box">
                <div className="page">
                    <div className="swiper_progress_bar">
                        <div className="slider_bar" >
                            <div className="fill" style={{ width: `${autoplayProgress}%` }}></div>
                        </div>
                    </div>
                    <div className="swiper-pagination">
                        <span>0{swiperIndex + 1}</span>
                        <span>/</span>
                        <span>0{data.length}</span>
                    </div>
                    <div className="swiper_btn">
                        <div className="swiperNextBtn" onClick={handlePrev} ></div>
                        <div className="swiperPrevBtn" onClick={handleNext} ></div>
                        <div className="Btn-auto"  onClick={handleAutoplayToggle}  >
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