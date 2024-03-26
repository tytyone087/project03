import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.svg';
import './header.scss';


const Header = () => {
    const activeStyle={
        fontWeight:'bold',
        color:'#000'
    }

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
                        <li className="menuList on"><NavLink to="/"style={({isActive}) => (isActive? activeStyle : undefined)}>홈</ NavLink></li>
                        <li className="menuList"><NavLink to="/main/theme.do"style={({isActive}) => (isActive? activeStyle : undefined)}>테마</ NavLink></li>
                        <li className="menuList"><NavLink to="/main/area.do" style={({isActive}) => (isActive? activeStyle : undefined)}>지역</ NavLink></li>
                        <li className="menuList"><NavLink to="#" style={({isActive}) => (isActive? activeStyle : undefined)}>여행콕콕</ NavLink>
                            <ul className='depth2'>
                                <li className="depth2List"><NavLink to="#">AI콕콕</ NavLink></li>
                                <li className="depth2List"><NavLink to="#"></NavLink>AI콕콕 플래너</li>
                            </ul></li>
                        <li className="menuList"><NavLink to="/tgpr/tgpr_main.do" style={({isActive}) => (isActive? activeStyle : undefined)} >여행상품홍보관</ NavLink></li>
                        <li className="menuList"><NavLink to="/tgpr/tgpr_main.do" style={({isActive}) => (isActive? activeStyle : undefined)}>여행정보</ NavLink>
                            <ul className="depth2">
                                <li className="depth2List"><NavLink to="#">여행지</ NavLink></li>
                                <li className="depth2List"><NavLink to="#"></ NavLink>여행기사</li>
                                <li className="depth2List"><NavLink to="#"></ NavLink>여행코스</li>
                                <li className="depth2List"><NavLink to="#"></ NavLink>축제</li>
                                <li className="depth2List"><NavLink to="#"></ NavLink>공연 / 행사</li>
                                <li className="depth2List"><NavLink to="#"></NavLink>이벤트</li>
                                <li className="depth2List"><NavLink to="#"></NavLink>가볼래&#45;터</li>
                                <li className="depth2List"><NavLink to="#"></NavLink>디지털관광주민증</li>
                            </ul>
                        </li>
                        <li className="menuList"><NavLink to="#" style={({isActive}) => (isActive? activeStyle : undefined)}>여행지도</ NavLink></li>
                    </ul>
                </nav>
                <div className='form pc'>
                    <span className='input' id='placeHolder'>
                        <input type="text" placeholder='어디로,어떤 여행을 떠날 예정인가요?'id='inp_search' />
                        <NavLink to="#">검색</NavLink>
                    </span>
                    <div className="profile">
                        <NavLink to="#">로그인</NavLink>
                    </div>

                </div>
                

            </div>
        </header>
            

    );
};

export default Header;