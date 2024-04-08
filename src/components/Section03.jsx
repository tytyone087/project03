import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import tabMenu01 from '../data/tabMenu01';
import tabMenu03 from '../data/tabMenu03';


const Section03 = () => {

    const [randomItems, setRandomItems] = useState([]);
    const [randomItem3, setRandomItem3] = useState([]);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [likedItems, setLikedItems] = useState(Array(randomItems.length).fill(false));

    const handleMouseOver = (index) => {
        setHoveredItem(index);
    };

    const handleLikeButtonClick = (index) => {
        const updatedLikedItems = [...likedItems];
        updatedLikedItems[index] = !updatedLikedItems[index];
        setLikedItems(updatedLikedItems);
        if (updatedLikedItems[index]) {
            alert('좋아요를 눌렀습니다');
        } else {
            alert('좋아요를 취소했습니다');
        }
    };

    const getRandomItems = () => {
        const shuffledData = tabMenu01.sort(() => Math.random() - 0.5);
        return shuffledData.slice(0, 4);
    };
    const getRandomItem3 = () => {
        const shuffledData = tabMenu03.sort(() => Math.random() - 0.5);
        return shuffledData.slice(0, 3);
    };

    useEffect(() => {
        setRandomItems(getRandomItems());
    }, []);

    useEffect(() => {
        setRandomItem3(getRandomItem3());
    }, []);

    const handleTabClick = (id) => {
        document.querySelectorAll('.tab_cont').forEach(tab => {
            tab.classList.remove('active');
        });

        document.querySelectorAll('.tab li').forEach(tabItem => {
            tabItem.classList.remove('on');
        });

        document.getElementById(id).classList.add('active');
        document.querySelector(`.tab a[href="#${id}"]`).parentNode.classList.add('on');
    };

    const handleMoreViewClick = () => {
        setRandomItems(getRandomItems());
    };
    function preventClick(e){
        e.preventDefault()
    }



    return (
        <div className='section03'>
            <h2><Link>DaTa Lab 여행콕콕</Link></h2>
            <div className="cont_wrap">
                <ul className="tab">
                    <li className="menu01 on" onClick={() => {handleTabClick('tabMenu01');} }>
                        <a href='#tabMenu01'onClick={preventClick}></a>
                    </li>
                    <li className="menu02" onClick={() => handleTabClick('tabMenu02')}>
                        <a href='#tabMenu02' onClick={preventClick}></a>
                    </li>
                    <li className="menu03" onClick={() => handleTabClick('tabMenu03')}>
                        <a href='#tabMenu03' onClick={preventClick}></a>
                    </li>
                </ul>
                <div className="tab_cont active" id='tabMenu01'>
                    <h3 className="blind">AI 콕콕</h3>
                    <p>당신의 성향, 취향 분석 완료! 마음에 쏙 들 여행지를 추천해 드릴게요.</p>
                    <div className="ai_list">
                        <ul>
                        {randomItems.map((item, index) => (
                            <li key={index} onMouseOver={() => handleMouseOver(index)}  className={hoveredItem === index ? "on" : ""}> 
                                <div className='contbox'>
                                    <Link to={item.link}>
                                        <div className="img_wrap" style={{backgroundImage:`url(${process.env.PUBLIC_URL + item.img})`}}>
                                            <strong>{item.title}</strong>
                                            <span>{item.address}</span>
                                        </div>
                                    </Link>
                                    <button type='button' className={likedItems[index] ? 'good on' : 'good'} onClick={() => handleLikeButtonClick(index)}></button>
                                </div>
                            </li>
                            ))}
                        </ul>
                        <div className="more_view">
                            <button type='button' onClick={handleMoreViewClick}>오늘의 <strong>AI콕콕</strong> 추천</button>
                            <Link>더보기</Link>
                        </div>
                    </div>
                </div>
                <div className="tab_cont" id='tabMenu02'>
                    <h3 className="blind">핫플콕콕</h3>
                    <p>관광 빅데이터 정보로 분석한 지역별 핫한 여행지와 맛집을 소개합니다.</p>
                    <div className="area_tab">
                        <ul className='tabList'>
                            <li  >
                                <button type='button' className='all on'>전국</button>
                            </li>
                            <li>
                                <button type='button'>서울</button>
                            </li>
                            <li>
                                <button type='button'>인천</button>
                            </li>
                            <li>
                                <button type='button'>대전</button>
                            </li>
                            <li>
                                <button type='button'>대구</button>
                            </li>
                            <li>
                                <button type='button'>광주</button>
                            </li>
                            <li>
                                <button type='button'>부산</button>
                            </li>
                            <li>
                                <button type='button'>울산</button>
                            </li>
                            <li>
                                <button type='button'>세종</button>
                            </li>
                            <li>
                                <button type='button'>경기</button>
                            </li>
                            <li>
                                <button type='button'>강원</button>
                            </li>
                            <li>
                                <button type='button'>충북</button>
                            </li>
                            <li>
                                <button type='button'>충남</button>
                            </li>
                            <li>
                                <button type='button'>경북</button>
                            </li>
                            <li>
                                <button type='button'>경남</button>
                            </li>
                            <li>
                                <button type='button'>전북</button>
                            </li>
                            <li>
                                <button type='button'>전남</button>
                            </li>
                            <li>
                                <button type='button'>제주</button>
                            </li>
                        </ul>
                    </div>    
                    <ul className='hot'>
                    {randomItems.map((item, index) => (
                        <li key={index} > 
                            <Link to={item.link}>
                                <div className='img_scale' style={{height:'100%'}}>
                                    <div className="img_wrap" style={{backgroundImage:`url(${process.env.PUBLIC_URL + item.img})`}}>
                                    </div>
                                </div>
                                <strong>{item.title}</strong>
                            </Link>
                            <button type='button' className={likedItems[index] ? 'good on' : 'good'} onClick={() => handleLikeButtonClick(index)}></button>
                        </li>
                        ))}
                    </ul>
                    <div className="more_view">
                        <button type='button' onClick={handleMoreViewClick}>오늘의 <strong>핫플콕콕</strong> 추천</button>
                        <Link>더보기</Link>
                    </div>
                </div>
                <div className="tab_cont" id='tabMenu03'>
                    <h3 className="blind">AI콕콕 플래너</h3>
                    <p>1분이면 끝! 맞춤형 여행 코스 추천 받아보세요.</p>
                    <div>
                        <ul className='abcList'>
                        {randomItem3.map((item, index) => (
                            <li key={index} > 
                                <Link to={item.link}>
                                    <span className='best'>Best</span>
                                    <div className='img_scale'>
                                        <div className="img_wrap" style={{backgroundImage:`url(${process.env.PUBLIC_URL + item.img})`}}>
                                        </div>
                                    </div>
                                    <div className='info'>
                                        <span className='profile'>
                                            <img src={process.env.PUBLIC_URL + item.profil}  />
                                        </span>
                                        <em>{item.period}</em>
                                        <strong>{item.title}</strong>
                                        <span className='area'>{item.address}</span>
                                        <span>만든 날짜</span>
                                        <span>{item.day}</span>
                                    </div>
                                </Link>  
                            </li>
                            ))}
                        </ul>
                        <div className="more_view">
                            <button type='button'>나만의 <strong>코스</strong> 만들기</button>
                            <Link>더보기</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Section03;