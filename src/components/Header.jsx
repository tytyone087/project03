import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.svg';
import './header.scss';


 const Header = () => {

    const [isHovering, setIsHovering] = useState(false);

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
                    <ul className="depth1"  onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)} >
                        <li className="menuList"><NavLink to="/" className={({isActive}) => (isActive? 'on' : '') } >홈</ NavLink></li>
                        <li className="menuList"><NavLink to="/main/theme.do" className={({isActive}) => (isActive? 'on' : '')}>테마</ NavLink></li>
                        <li className="menuList"><NavLink to="/main/area.do" className={({isActive}) => (isActive? 'on' : '')}>지역</ NavLink></li>
                        <li className="menuList"><NavLink to="/main/plan.do" className={({isActive}) => (isActive? 'on' : '')}>여행콕콕</ NavLink></li>
                        <li className="menuList"><NavLink to="/tgpr/tgpr_main.do" className={({isActive}) => (isActive? 'on' : '')}>여행상품 홍보관</ NavLink></li>
                        <li className="menuList"><NavLink to="/tgpr/tgpr_plan.do" className={({isActive}) => (isActive? 'on' : '')}>여행정보</ NavLink></li>
                        <li className="menuList"><NavLink to="/main/map.do" className={({isActive}) => (isActive? 'on' : '')}>여행지도</ NavLink></li>
                    </ul>
                    {
                        isHovering? (
                           <div className='depthback' onMouseOver={()=>setIsHovering(true)}  onMouseOut={() => setIsHovering(false)}>
                                <ul className="depth2 plan">
                                    <li className="depth2List"><p>AI콕콕</ p></li>
                                    <li className="depth2List"><p>핫플콕콕</ p></li>
                                    <li className="depth2List"><p>AI콕콕 플래너</p></li> 
                                </ul>
                                <ul className="depth2 tgpr">    
                                    <li className="depth2List"><p>여행지</p></li>
                                    <li className="depth2List"><p>여행기사</p></li>
                                    <li className="depth2List"><p>여행코스</p></li>
                                    <li className="depth2List"><p>축제</p></li>
                                    <li className="depth2List"><p>공연 / 행사</p></li>
                                    <li className="depth2List"><p>이벤트</p></li>
                                    <li className="depth2List"><p>가볼래&#45;터</p></li>
                                    <li className="depth2List"><p>디지털관광주민증</p></li>
                                    
                                </ul>
                           </div>
                        ):("")
                    }
                </nav>
                <div className='form pc'>
                    <span className='input' id='placeHolder'>
                        <input type="text" placeholder='어디로,어떤 여행을 떠날 예정인가요?'id='inp_search' />
                        <Link>검색</Link></span>
                    <div className="profile"><Link>로그인</Link></div>

                </div>
                

            </div>
        </header>
            

    );
};

export default Header;