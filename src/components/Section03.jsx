import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import tabMenu01 from '../data/tabMenu01';


const Section03 = () => {
    const [randomItems, setRandomItems] = useState([]);
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

    useEffect(() => {
        setRandomItems(getRandomItems());
    }, []);

    const handleMoreViewClick = () => {
        setRandomItems(getRandomItems());
    };

    return (
        <div className='section03'>
            <h2>
                <Link>DaTa Lab 여행콕콕</Link>
            </h2>
            <div className="cont_wrap">
                <ul className="tab">
                    <li className="menu01 on">
                        <a href='#tabMenu01'></a>
                    </li>
                    <li className="menu02">
                        <a href='#tabMenu02'></a>
                    </li>
                    <li className="menu03">
                        <a href='#tabMenu03'></a>
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
                <div className="tab_cont" id='tabMenu02'></div>
                <div className="tab_cont" id='tabMenu03'></div>
            </div>
        </div>
    );
};

export default Section03;