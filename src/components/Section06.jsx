import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Section06 = () => {
    const [swiperIndex, setSwiperIndex] = useState(0); // -> 페이지네이션용
    const [swiper, setSwiper] = useState(); // -> 슬라이드용
    
    return (
        <div className='section06'>
            <div className="btm_cont">
                <div className="content">
                    <div className="inr">
                        <h3 className="tit_atc">EVENT</h3>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            >
                            <SwiperSlide>
                                <Link>
                                    <div className="img">
                                        <img src="./img/event01.png" alt="디민증 발급받고 연천" />
                                    </div>
                                    <strong>
                                        디민증 발급받고 연천으로!<br /> 2024. 3. 25. ~ 2024. 4. 7.
                                    </strong>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <div className="img">
                                        <img src="./img/event02.png" alt="디민증 발급받고 연천" />
                                    </div>
                                    <strong>
                                    봄꽃 여행 퀴즈이벤트<br />  2024. 4. 1. ~ 2024. 4. 12.
                                    </strong>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                        
                    </div>
                    <div className="inr">
                    <h3 className="tit_atc">함께 떠나는 힐링테마 여행</h3>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={4}
                            pagination={{ 
                                el:".pagination_fraction",
                                type: 'fraction',

                            }}
                            navigation= {{
                                prevEl: ".Btnprev",
                                nextEl: ".Btnnext"
                            }}
                            scrollbar={{
                                el:".pagination_scrollbar",
                              }}
                            modules={[Pagination, Navigation, Scrollbar]}  
                            onActiveIndexChange={(e)=>setSwiperIndex(e.realIndex)}
                            onSwiper={(e) => {setSwiper(e)}}
                            className='main_swiper'
                            >
                            <SwiperSlide>
                                <Link>
                                    <div className="img">
                                        <img src="./img/btm02.png" alt="스타필드" />
                                    </div>
                                    <strong>
                                    취향 따라 기분 따라 <br />내게 맞는 스타필드 찾기
                                    </strong>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <div className="img">
                                        <img src="./img/btm01.png" alt="이색 실내 게임장" />
                                    </div>
                                    <strong>
                                    황사가 심한 날엔<br /> 이색 실내 게임장으로!
                                    </strong>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <div className="img">
                                        <img src="./img/btm03.png" alt="봄 트레킹 명소 4" />
                                    </div>
                                    <strong>
                                    진달래가 아름다운<br />봄 트레킹 명소 4 
                                    </strong>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <div className="img">
                                        <img src="./img/btm04.png" alt="경춘선" />
                                    </div>
                                    <strong>
                                    낭만이 가득한 경춘선 따라<br />봄마중 가는 길
                                    </strong>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <div className="img">
                                        <img src="./img/btm06.png" alt="구단별 이색 먹거리" />
                                    </div>
                                    <strong>
                                    야구 직관의 묘미를 더할<br />구단별 이색 먹거리
                                    </strong>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link>
                                    <div className="img">
                                        <img src="./img/btm07.png" alt="디민증 발급받고 연천" />
                                    </div>
                                    <strong>
                                    데이트 코스로 가기 좋은<br />서울 목련뷰 카페4
                                    </strong>
                                </Link>
                            </SwiperSlide>
                            <div className="swiper_btn">
                                <div className="Btnprev"></div>
                                <div className="Btnnext"></div>
                            </div>
                            <div className="pagination_fraction"></div>
                            <div className="pagination_scrollbar"></div>
                            
                            
                        </Swiper>
                        
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section06;