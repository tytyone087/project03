import React from 'react';
import { Link } from 'react-router-dom';

const Section04 = () => {
    return (
        <div className='section04'>
            <div className="mc_inner">
                <div className="top_cont">
                    <div className="top_left">
                        <Link><img src="./img/31f71f94-54f1-428b-8bf7-e602da19e8dd.png" alt="가볼래-터" /></Link>
                    </div>
                    <div className="top_right">
                        <Link className='tit_atc'>오늘의 여행 소식
                            <span className='btn_more'>더보기</span>
                        </Link>
                        <ul className='list_board'>
                            <li><Link>
                            <em style={{color:"#1f40c3"}}>2024 창덕궁 달빛기행ㅣ</em>
                            봄밤, 창덕궁에서의 특별한 달빛산책
                            </Link></li>
                            <li><Link>
                            <em style={{color:"#1f40c3"}}>오얏꽃등 밝힌 창덕궁의 밤ㅣ</em>
                            궁중음악으로 즐기는 창덕궁의 밤!
                            </Link></li>
                            <li><Link>
                            <em style={{color:"#1f40c3"}}>진달래 숲길 특별개방ㅣ</em>
                            봄의 세종대왕릉으로 초대합니다
                            </Link></li>
                            <li><Link>
                            <em style={{color:"#1f40c3"}}>산림청ㅣ</em>
                            새소리 들으며 고즈넉한 벚꽃길을 걸어보세요!
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section04;