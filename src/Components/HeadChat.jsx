import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HeadChat = () => {
    const {mode} = useSelector((state) => state.toggleAction);
  return (
    <div className={`${mode ? 'lightdark' : 'bg-white'} hmuseraction rounded p-3 shadow`}>
        <div className="p-3">
            <div className="d-flex align-items-center justify-content-between">
                <div className={`${mode ? 'text-grey' : ''} fw-bold h5`}>Chats</div>
                <div className=""> 
                    <i className="fas fa-ellipsis-h fw-4 text-muted cs-pointer fa-fw cs-pointer px-4"></i>
                    <i className="fas fa-expand fw-4 text-muted cs-pointer fa-fw cs-pointer px-4"></i>
                    <i className="fas fa-video fw-4 text-muted cs-pointer fa-fw cs-pointer px-4"></i>
                    <i className="fas fa-edit fw-4 text-muted cs-pointer fa-fw cs-pointer px-4"></i>
                </div>
            </div>
            <div className="">
                <form className='bg-light ms-2 rounded-pill py-0 px-3 d-flex align-items-center mhhdform'>
                    <i className="fas fa-search fa-sm text-secondary fa-fw"></i>
                    <input type="text" placeholder="Search messenger" className="border-0 bg-transparent form-control d-none d-lg-block" />
                </form>
            </div>
            <div className="d-flex align-items-center justify-content-between py-2">
                <div className="d-flex align-items-center w-100">
                    <div className="position-relative">
                        <i className="fas fa-user-circle fa-3x text-muted fa-fw"></i>
                    </div>
                    <div className={mode ? 'text-grey' : ''}>
                        <div className="fw-bold fs-6">Mercy Johnson </div>
                        <div className='fs-7 text-secondary'>This is a notification from the faceb...</div>
                    </div>
                </div>
                <div className="fs-7 text-secondary"> 10W </div>
            </div>
        </div>
        <div className="border-top text-center py-3">
            <Link to="" className="fs-6">See all in messenger</Link>
        </div>
    </div>
  )
}

export default HeadChat