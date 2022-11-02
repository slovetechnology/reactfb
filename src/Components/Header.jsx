import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleHomeall, toggleHomechat, toggleHomenotis, toggleHomeuser } from '../App/ToggleAction'
import Logo from "../imgs/logo.png"
import HeadAll from './HeadAll'
import HeadChat from './HeadChat'
import HeadNotify from './HeadNotify'
import HeadUserAction from './HeadUserAction'

const Header = () => {
    const {homeuser, homenotis, homechat, homeall, mode} = useSelector((state) => state.toggleAction);
    const dispatch = useDispatch();
  return (
    <>
    <div className={`${mode ? 'hddark hdbb' : 'bg-white'} headed shadow-sm d-flex align-items-center justify-content-between px-3`}>
        <div className="d-flex align-items-center">
            <img src={Logo} alt="" className="hdlogo" />
            <form className={`${mode ? 'formdark' : 'bg-darklight'} ms-2 rounded-pill py-1 px-3 d-flex align-items-center mhhdform`}>
                <i className="fas fa-search fa-lg text-secondary fa-fw"></i>
                <input type="text" placeholder="Search Goodyman" className={`${mode ? 'hdforms' : ''} border-0 bg-transparent text-grey form-control d-none d-lg-block`} />
            </form>
        </div>
        <div className="hdnavlinks text-center d-none d-lg-block">
            <Link to="/" className={mode ? 'mhpagelist3 text-grey' : 'bg-whitesmoke1'}> <i className="fas fa-home fa-sm fa-fw "></i> </Link>
            <Link to="/friends" className={mode ? 'mhpagelist3 text-grey' : 'bg-whitesmoke1'}> <i className="fas fa-user-friends fa-sm fa-fw"></i> </Link>
            <Link to="" className={mode ? 'mhpagelist3 text-grey' : 'bg-whitesmoke1'}> <i className="fas fa-tv fa-sm fa-fw"></i> </Link>
            <Link to="" className={mode ? 'mhpagelist3 text-grey' : 'bg-whitesmoke1'}> <i className="fas fa-store fa-sm fa-fw"></i> </Link>
            <Link to="" className={mode ? 'mhpagelist3 text-grey' : 'bg-whitesmoke1'}> <i className="fas fa-users fa-sm fa-fw"></i> </Link>
        </div>
        <div className={`${mode ? 'dark text-grey' : 'bg-whitesmoke'} hdnavlinks d-block d-lg-none`}> <Link to=""><i className="fas fa-bars fa-sm fa-fw"></i></Link> </div>
        <div className="hdnav2">
            <div className={`${mode ? 'dark text-grey' : 'bg-whitesmoke'} d-none d-lg-block`} onClick={() => dispatch(toggleHomeall())}> <i className="fas fa-braille fs-4 fa-fw"></i> </div>
            <div className={`${mode ? 'dark text-grey' : 'bg-whitesmoke'} d-block d-lg-none`}> <i className="fas fa-plus fs-4 fa-fw"></i> </div>
            <div className={`${mode ? 'dark text-grey' : 'bg-whitesmoke'}`} onClick={() => dispatch(toggleHomechat())}> <i className="fab fa-facebook-messenger fa-sm fa-fw"></i></div>
            <div className={`${mode ? 'dark text-grey' : 'bg-whitesmoke'}`} onClick={() => dispatch(toggleHomenotis())}> <i className="fas fa-bell fs-4 fa-fw"></i> </div>
            <div className={`${mode ? 'dark text-grey' : 'bg-whitesmoke'}`} onClick={() => dispatch(toggleHomeuser())}> <i className="fas fa-user-circle fs-4 fa-fw"></i> </div>
        </div>
    </div>
    {homeall && <HeadAll />}
    {homechat && <HeadChat />}
    {homenotis && <HeadNotify />}
    {homeuser && <HeadUserAction />}
    </>
  )
}

export default Header