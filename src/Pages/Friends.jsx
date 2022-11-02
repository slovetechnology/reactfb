import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import img1 from "../imgs/1.jpg"

const Friends = () => {
    const {mode} = useSelector((state) => state.toggleAction);
  return (
    <div>
        <Header />
        <div className={`${mode ? 'dark text-grey' : 'bg-darklight'} mainbody d-flex align-items-center`}>
            <div className={`${mode ? 'lightdark hdbr' : 'bg-white'} firstbd px-4 py-3 greyscroll shadow`}>
                <div className="">
                    <div className="d-flex align-items-center justify-content-between py-2">
                        <div className="fs-4 fw-bold">Friends</div>
                        <div className={`${mode ? 'formdark' : 'bg-grey'} br-50 hmicon py-2`}><i className="fas fa-cog fa-lg fa-fw"></i></div>
                    </div>
                    {/* ================================= */}
                    <div className={`${mode ? 'text-grey mhpagelist2' : 'mhpagelist'} d-flex align-items-center justify-content-between hmleftlink w-100 rounded px-2 cs-pointer`}>
                        <div className="d-flex align-items-center">
                            <div className="bg-primary br-50 hmicon py-2"><i className="fas fa-user-friends fa-lg fa-fw text-white"></i></div>
                            <div className="fw-bold ms-2 fs-7">Home</div>
                        </div>
                        <div className=""> </div>
                    </div>
                    {/* ====================== */}
                    {/* ================================= */}
                    <div className={`${mode ? 'text-grey mhpagelist2' : 'mhpagelist'} d-flex align-items-center justify-content-between hmleftlink w-100 rounded px-2 cs-pointer`}>
                        <div className="d-flex align-items-center">
                            <div className={`${mode ? 'formdark' : 'bg-grey'} br-50 hmicon py-2`}><i className="fas fa-user-clock fa-lg fa-fw"></i></div>
                            <div className="fw-bold ms-2 fs-7">Friend requests</div>
                        </div>
                        <div className=""> <i className="fas fa-chevron-right fa-sm fa-fw"></i> </div>
                    </div>
                    {/* ====================== */}
                    {/* ================================= */}
                    <div className={`${mode ? 'text-grey mhpagelist2' : 'mhpagelist'} d-flex align-items-center justify-content-between hmleftlink w-100 rounded px-2 cs-pointer`}>
                        <div className="d-flex align-items-center">
                            <div className={`${mode ? 'formdark' : 'bg-grey'} br-50 hmicon py-2`}><i className="fas fa-user-plus fa-lg fa-fw"></i></div>
                            <div className="fw-bold ms-2 fs-7">Suggestions</div>
                        </div>
                        <div className=""> <i className="fas fa-chevron-right fa-sm fa-fw"></i> </div>
                    </div>
                    {/* ====================== */}
                    {/* ================================= */}
                    <div className={`${mode ? 'text-grey mhpagelist2' : 'mhpagelist'} d-flex align-items-center justify-content-between hmleftlink w-100 rounded px-2 cs-pointer`}>
                        <div className="d-flex align-items-center">
                            <div className={`${mode ? 'formdark' : 'bg-grey'} br-50 hmicon py-2`}><i className="fas fa-user-tag fa-lg fa-fw"></i></div>
                            <div className="fw-bold ms-2 fs-7">All Friends</div>
                        </div>
                        <div className=""> <i className="fas fa-chevron-right fa-sm fa-fw"></i> </div>
                    </div>
                    {/* ====================== */}
                    {/* ================================= */}
                    <div className={`${mode ? 'text-grey mhpagelist2' : 'mhpagelist'} d-flex align-items-center justify-content-between hmleftlink w-100 rounded px-2 cs-pointer`}>
                        <div className="d-flex align-items-center">
                            <div className={`${mode ? 'formdark' : 'bg-grey'} br-50 hmicon py-2`}><i className="fas fa-gift fa-lg fa-fw"></i></div>
                            <div className="fw-bold ms-2 fs-7">Birthdays</div>
                        </div>
                        <div className="">  </div>
                    </div>
                    {/* ====================== */}
                    {/* ================================= */}
                    <div className={`${mode ? 'text-grey mhpagelist2' : 'mhpagelist'} d-flex align-items-center justify-content-between hmleftlink w-100 rounded px-2 cs-pointer`}>
                        <div className="d-flex align-items-center">
                            <div className={`${mode ? 'formdark' : 'bg-grey'} br-50 hmicon py-2`}><i className="fas fa-user-tag fa-lg fa-fw"></i></div>
                            <div className="fw-bold ms-2 fs-7">Custom lists</div>
                        </div>
                        <div className=""> <i className="fas fa-chevron-right fa-sm fa-fw"></i> </div>
                    </div>
                    {/* ====================== */}
                </div>
            </div>
            <div className={`fdbody py-4 px-3`}>
                <div className="d-flex align-items-center justify-content-between px-3 py-2">
                    <div className="h5 fw-bold">Friend requests</div>
                    <Link to="">See all</Link>
                </div>
                <div className="container pb-3">
                    <div className="row">
                        <div className="col-md-2 col-lg-3 mb-3">
                            <div className={`${mode ? 'lightdark hdb' : 'bg-white border'} fdcard rounded shadow-sm`}>
                                <img className="card-img-top ob-cover" src={img1} alt="" />
                                <div className="p-2">
                                    <h4 className="fs-6 fw-semibold">Janeth margret</h4>
                                    <div className="d-flex align-items-center">
                                        <img src={img1} alt="" className="frmutual2 br-50 ob-cover" />
                                        <div className="fs-7 text-secondary"> 2 mutual friends </div>
                                    </div>
                                    <div className="mt-2"> <button className="btn btn-primary w-100">Confirm</button> </div>
                                    <div className="mt-2"> <button className="btn bg-grey w-100">Delete</button> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-3 mb-3">
                            <div className={`${mode ? 'lightdark hdb' : 'bg-white border'} fdcard rounded shadow-sm`}>
                                <img className="card-img-top ob-cover" src={img1} alt="" />
                                <div className="p-2">
                                    <h4 className="fs-6 fw-semibold">Janeth margret</h4>
                                    <div className="p-2"></div>
                                    {/* <div className="d-flex align-items-center">
                                        <img src={img1} alt="" className="frmutual2 br-50 ob-cover" />
                                        <div className="fs-7 text-secondary"> 2 mutual friends </div>
                                    </div> */}
                                    <div className="mt-2"> <button className="btn btn-primary w-100">Confirm</button> </div>
                                    <div className="mt-2"> <button className="btn bg-grey w-100">Delete</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friends