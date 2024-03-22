import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.svg';
import './header.scss';


const Header = () => {

    return (
        <header id="headerGnb" className='gnbNav up'>
            <div className="gnb">
                <div className='search'>
                    <h1 className="logo">
                        <Link to='/' className="svgLogo" >
                            <img src={process.env.PUBLIC_URL +  MainLogo} />
                        </Link>
                    </h1>
                    <div className='mo'></div>
                    <div className='form mo'></div>
                </div>
                <nav className="menu">
                    <ul className="depth1">
                        <li className="menuList on"><Link to="/" >홈</ Link></li>
                        <li className="menuList"><Link to="/main/theme.do" >테마</ Link></li>
                        <li className="menuList"><Link to="/main/area.do" >지역</ Link></li>
                        <li className="menuList"><Link to="#" >여행콕콕</ Link>
                            <ul className='depth2'>
                                <li className="depth2List"><Link to="#">AI콕콕</ Link></li>
                                <li className="depth2List"><Link to="#"></Link>핫플콕콕</li>
                                <li className="depth2List"><Link to="#"></Link>AI콕콕 플래너</li>
                            </ul></li>
                        <li className="menuList"><Link to="/tgpr/tgpr_main.do" >여행상품홍보관</ Link></li>
                        <li className="menuList"><Link to="/tgpr/tgpr_main.do" >여행정보</ Link>
                            <ul className="depth2">
                                <li className="depth2List"><Link to="#">여행지</ Link></li>
                                <li className="depth2List"><Link to="#"></ Link>여행기사</li>
                                <li className="depth2List"><Link to="#"></ Link>여행코스</li>
                                <li className="depth2List"><Link to="#"></ Link>축제</li>
                                <li className="depth2List"><Link to="#"></ Link>공연 / 행사</li>
                                <li className="depth2List"><Link to="#"></Link>이벤트</li>
                                <li className="depth2List"><Link to="#"></Link>가볼래&#45;터</li>
                                <li className="depth2List"><Link to="#"></Link>디지털관광주민증</li>
                            </ul>
                        </li>
                        <li className="menuList"><Link to="#" >여행지도</ Link></li>
                    </ul>
                </nav>
                <div className='form pc'>
                    <span className='input' id='placeHolder'>
                        <input type="text" placeholder='어디로,어떤 여행을 떠날 예정인가요?'id='inp_search' />
                        <Link to="#">검색</Link>
                    </span>
                    <div className="profile">
                        <Link to="#">로그인</Link>
                    </div>

                </div>
                

            </div>
        </header>
            

    );
};

export default Header;