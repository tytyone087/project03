import React, { useEffect, useState, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Section05 = () => {

    const swiperRef = useRef();
    const [isActive, setIsActive] = useState(true);

    const handleAutoStopClick = () => {
        setIsActive(!isActive);
        const swiper = swiperRef.current && swiperRef.current.swiper; // Check if swiperRef.current is not null
        if (swiper) {
            if (isActive) {
                swiper.autoplay.stop();
            } else {
                swiper.autoplay.start();
            }
        }
    };
    return (
        <div className={`section05 ${ isActive ? '' : 'active'}`}>
            <Swiper
                modules={[ Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{
                    el:".swiper-pagination",
                    clickable:true
                }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className='type1swiper'
                >
                <SwiperSlide>
                    <div className="type2">
                        <div className="left" style={{backgroundColor:"#d8f0ff"}}>
                            <Link>
                                <span style={{color:"#122f42"}}>여행 갈 때 뭐 입지?</span>
                                <strong style={{color:"#3d3d3d"}}>게임으로 정하는 패션! 꾸.온.꾸</strong>
                                <img src={process.env.PUBLIC_URL + "/img/section05_01.png"} alt="" />
                            </Link>
                        </div>
                        <div className="right" style={{backgroundColor:"#b2e7c9"}}>
                            <Link>
                                <span style={{color:"#11542e"}}>15개 지역 명예 주민 모집!</span>
                                <strong style={{color:"#333333"}}>디지털 관광주민증 발급 받고, 혜택 받자!</strong>
                                <img src={process.env.PUBLIC_URL + "/img/section05_02.png"}  alt="" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="type2">
                        <div className="left" style={{backgroundColor:"#fff1ac"}}>
                            <Link>
                                <span style={{color:"#eb552f"}}>현지인 VS 외지인</span>
                                <strong style={{color:"#3d3d3d"}}>빅데이터가 알려주는<br /> 지역별 맛집 차트</strong>
                                <img src={process.env.PUBLIC_URL + "/img/section05_04.png"} alt="" />
                            </Link>
                        </div>
                        <div className="right" style={{backgroundColor:"#fce3d6"}}>
                            <Link>
                                <span style={{color:"#00473f"}}>15개 지역 명예 주민 모집!</span>
                                <strong style={{color:"#333333"}}>디지털 관광주민증 발급 받고, 혜택 받자!</strong>
                                <img src={process.env.PUBLIC_URL + "/img/section05_03.png"}  alt="" />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="paging">
                    <div className="btn_autoArea">
                        <div className="btn_autoStop" onClick={handleAutoStopClick}></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </Swiper>
            
            
        </div>
    );
};

export default Section05;