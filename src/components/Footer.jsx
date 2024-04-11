import React, { useState } from 'react';
import './footer.scss'
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';

const Footer = () => {
    const selectList2 = [
         "관광정보" ,"가이드북" , "베니키아", "고캠핑" , "두루누비" ,"관광불편신고센터", "공공 와이파이", "현충시설정보서비스", "템플스테이", "문화유산 유유자적", "세이프스테이" , "관광두레", "관광사진 갤러리", "TourAPI4.0" ,"한국관광 데이터랩", "한국관광산업포털", "한국관광 콘텐츠랩" ];
      const [selected2, setSelected2] = useState('관광정보');
    
      const handleSelect2 = (e) => {
        setSelected2(e.target.value);
      };

      const selectList = [
        "유관기관" ,"외교통상부 해외 안전여행" , "대한민국의 아름다운영토 독도", "박물관 길위의 인문학" , "전남 관광지 순환버스 남도한바퀴" ,"국가mice 포털", "국립현대미술관", "경기관광공사", "제주관광공사", "부산관광공사", "인천관광공사", "서울관광재단",  "한국철도공사", "국립중앙박물관", "문화체육관광부", "한국산림복지진흥원", "디엠지기(DMZIGI)", "한국방문위원회", "문화가 있는날", "인문 360˚",, "한국도로공사", "현충시설정보서비스"  ];
     const [selected, setSelected] = useState('유관기관');
   
     const handleSelect = (e) => {
       setSelected(e.target.value);
     };

    return (
        <div id='footer'>
            <div className="area_notice">
                <div>
                    <div className="notice_slider">
                        <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            nextEl:".button-next",
                            prevEl:".button-prev"
                        }}
                        direction={'vertical'}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>
                            <Link>[소식]K-컬처의 모든 매력을 한곳에 담다, 한국방문의 해 팝업 오픈</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link>[소식]오얏꽃 흩날리는 밤, 덕수궁 석조전에서 가배차 마시며 뮤지컬 본다</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link>[소식]한국방문의 해 x 하이커 그라운드 팝업 개최!</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link>[소식]봄밤, 창덕궁에서의 특별한 달빛산책</Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link>[소식]내 나라 지역여행 ‘버킷리스트’ 채우세요</Link>
                        </SwiperSlide>

                        </Swiper>
                        <div className="paging">
                            <button className='btn_auto'></button>
                        </div>
                        <button type='button' className='button-prev'></button>
                        <button type='button' className='button-next'></button>
                        <Link className='more_Link'></Link>
                    </div>
                    <div className="sel_area">
                        <div className="sel_member">
                            <select name='relation2' id='relation2' onChange={handleSelect2} value={selected2}>
                            {selectList2.map((item) => (
                                <option value={item} key={item}>
                                {item}
                                </option>
                            ))}
                            </select>
                            <Link className='link_view'>이동</Link>
                        </div>
                        <div className="sel_member">
                            <select name='relation' id='relation' onChange={handleSelect} value={selected}>
                            {selectList.map((item) => (
                                <option value={item} key={item}>
                                {item}
                                </option>
                            ))}
                            </select>
                            <Link className='link_view'>이동</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box_footer">
                <div className="footer_snsList">
                    <span className="tit">대한민국 구석구석을 SNS에서 만나보세요! </span>
                    <ul>
                        <li>
                            <Link>
                                <span className="ico ico_blog"></span>
                                <em className='sns_name'>블로그</em>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span className="ico ico_post"></span>
                                <em className='sns_name'>포스트</em>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span className="ico ico_facebook"></span>
                                <em className='sns_name'>페이스북</em>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span className="ico ico_twitter"></span>
                                <em className='sns_name'>엑스</em>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span className="ico ico_kakaostory"></span>
                                <em className='sns_name'>카카오<br />스토리</em>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span className="ico ico_instargram"></span>
                                <em className='sns_name'>인그타<br />그램</em>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span className="ico ico_naver"></span>
                                <em className='sns_name'>네이버<br />밴드</em>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="footer_data">
                    <div className="footer_banner">
                        <span>
                            <Link>
                                <img src="./img/fot_link_banner8.png" alt="" />
                            </Link>
                        </span>
                        <span>
                            <Link>
                                <img src="./img/fot_link_banner3.gif" alt="" />
                            </Link>
                        </span>
                    </div>
                    <div className="footer_banner">
                        <span>
                            <Link>
                                <img src="./img/fot_link_banner6.gif" alt="" />
                            </Link>
                        </span>
                        <span>
                            <Link>
                                <img src="./img/fot_link_banner4.gif" alt="" />
                            </Link>
                        </span>
                    </div>
                    <div className="footer_banner">
                        <span>
                            <Link>
                                <img src="./img/fot_link_banner7.gif" alt="" />
                            </Link>
                        </span>
                    </div>
                    <ul className="btm_menu">
                        <li>   
                            <Link className='peronal_info'>개인정보처리방침</Link>
                        </li>
                        <li>   
                            <Link>이용약관</Link>
                        </li>
                        <li>   
                            <Link>저작권정책</Link>
                        </li>
                        <li>   
                            <Link>고객서비스헌장</Link>
                        </li>
                        <li>   
                            <Link>전자우편무단수집거부</Link>
                        </li>
                        <li>   
                            <Link>Q&amp;A</Link>
                        </li>
                        <li>   
                            <Link>찾아오시는길</Link>
                        </li>
                    </ul>
                    <ul className='ft_address'>
                        <li>
                            <span>우&#41;26464</span>
                            <span>강원도 원주시 세계로 10</span>
                            TEL : 033-738-3000
                        </li>
                        <li>사업자등록번호 : 202-81-50707</li>
                        <li>통신판매업신고 : 제2009-서울중구-1234호</li>
                    </ul>
                </div>
                <div className="footer_PCLogo">
                    <span className='btn_footLogo'>
                        <img src="./img/logo_foot.png" alt="" />
                    </span>
                    <ul className="logo_List">
                        <li>
                            <Link>
                                <img src="./img/logo_foot_api.png" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="./img/logo_foot_wa.png" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="./img/logo_foot_gg.png" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src="./img/logo_foot_mg.png" alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;