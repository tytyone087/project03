import React, { useState } from 'react';
import './footer.scss'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Footer = () => {
    const selectList = [
         "관광정보" ,"가이드북" , "베니키아", "고캠핑" , "두루누비" ,"관광불편신고센터" ];
      const [selected, setSelected] = useState('관광정보');
    
      const handleSelect = (e) => {
        setSelected(e.target.value);
      };

    return (
        <div id='footer'>
            <div className="area_notice">
                <div>
                    <div className="notice_slider">
                        <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>
                            <Link>[소식]K-컬처의 모든 매력을 한곳에 담다, 한국방문의 해 팝업 오픈</Link>
                        </SwiperSlide>

                        </Swiper>
                        <div className="paging"></div>
                        <button type='button' className='button-prev'></button>
                        <button type='button' className='button-next'></button>
                        <Link className='more_Link'></Link>
                    </div>
                    <div className="sel_area">
                        <div className="sel_member">
                            <select name='relation2' id='relation2' onChange={handleSelect} value={selected}>
                            {selectList.map((item) => (
                                <option value={item} key={item}>
                                {item}
                                </option>
                            ))}
                            </select>
                              
                        </div>
                    </div>
                </div>
            </div>
            <div className="box_footer">
                <div className="footer_snsList"></div>
                <div className="footer_data"></div>
                <div className="footer_PCLogo"></div>
            </div>
        </div>
    );
};

export default Footer;