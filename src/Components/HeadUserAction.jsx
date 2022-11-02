
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { togAppmode, toggleHomeuser } from '../App/ToggleAction';

const HeadUserAction = () => {
    const {mode} = useSelector((state) => state.toggleAction);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutbtn = () => {
        dispatch(toggleHomeuser());
        navigate('/login');
    }
    const togModes = () => {
        dispatch(togAppmode())
    }
  return (
    <div className={`${mode ? 'lightdark' : 'bg-white'} hmuseraction rounded p-3 shadow`}>
        <div className="shadow-lg rounded p-2">
            <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} d-flex align-items-center justify-content-between rounded px-2 cs-pointer py-2`}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-user-circle fa-lg text-muted fa-fw"></i>
                    <div className={`${mode ? 'text-grey' : ''} fw-bold`}>George Godslove Developer</div>
                </div>
                <div className=""> <i className="fas fa-recycle fa-sm fa-fw text-secondary"></i></div>
            </div>
            <div className="togmodes mt-2"> <div onClick={togModes} className={`tog_mode ${mode ? 'toright' : 'toleft'}`}></div> </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
                <Link to="" className='fs-8'>See all profiles</Link>
                <div className="bg-danger text-white rounded-pill py-0 fs-7 px-2">50+</div>
            </div>
        </div>
        <div className="pt-3">
            <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} d-flex align-items-center justify-content-between rounded px-2 cs-pointer py-2`}>
                <div className="d-flex align-items-center">
                    <div className={`${mode ? 'dark text-grey' : 'bg-darklight'} br-50 py-1 px-1`}> <i className="fas fa-cog fa-lg fa-fw"></i> </div>
                    <div className={`${mode ? 'text-grey' : 'text-secondary'} ms-2 fs-8 fw-semibold`}>Settings &amp; privacy </div>
                </div>
                <div className=""> <i className="fas fa-chevron-right text-muted fa-lg fa-fw"></i> </div>
            </div>
            <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} d-flex align-items-center justify-content-between rounded px-2 cs-pointer py-2`}>
                <div className="d-flex align-items-center">
                    <div className={`${mode ? 'dark text-grey' : 'bg-darklight'} br-50 py-1 px-1`}> <i className="fas fa-question fa-lg fa-fw"></i> </div>
                    <div className={`${mode ? 'text-grey' : 'text-secondary'} ms-2 fs-8 fw-semibold`}>Help &amp; support </div>
                </div>
                <div className=""> <i className="fas fa-chevron-right text-muted fa-lg fa-fw"></i> </div>
            </div>
            <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} d-flex align-items-center justify-content-between rounded px-2 cs-pointer py-2`}>
                <div className="d-flex align-items-center">
                    <div className={`${mode ? 'dark text-grey' : 'bg-darklight'} br-50 py-1 px-1`}> <i className="fas fa-moon fa-lg fa-fw"></i> </div>
                    <div className={`${mode ? 'text-grey' : 'text-secondary'} ms-2 fs-8 fw-semibold`}>Display &amp; accessibility </div>
                </div>
                <div className=""> <i className="fas fa-chevron-right text-muted fa-lg fa-fw"></i> </div>
            </div>
            <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} d-flex align-items-center justify-content-between rounded px-2 cs-pointer py-2`}>
                <div className="d-flex align-items-center">
                    <div className={`${mode ? 'dark text-grey' : 'bg-darklight'} br-50 py-1 px-1`}> <i className="fas fa-comment-alt fa-lg fa-fw"></i> </div>
                    <div className={`${mode ? 'text-grey' : 'text-secondary'} ms-2 fs-8 fw-semibold`}>Give feedback </div>
                </div>
                <div className=""></div>
            </div>
            <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} d-flex align-items-center justify-content-between rounded px-2 cs-pointer py-2`} onClick={logoutbtn}>
                <div className="d-flex align-items-center">
                    <div className={`${mode ? 'dark text-grey' : 'bg-darklight'} br-50 py-1 px-1`}> <i className="fas fa-door-open fa-lg fa-fw"></i> </div>
                    <div className={`${mode ? 'text-grey' : 'text-secondary'} ms-2 fs-8 fw-semibold`}>Logout </div>
                </div>
                <div className=""> </div>
            </div>
            <div className="fs-7 text-muted">Privacy . Terms . Advertising . Ad choices . Cookies . More . Godslove &copy; 2022 </div>
        </div>
    </div>
  )
}

export default HeadUserAction