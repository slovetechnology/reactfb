import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import img2 from "../imgs/2.jpg"

const HomeRightside = () => {
    const {mode} = useSelector((state) => state.toggleAction);
  return (
    <div className={`${mode ? 'dark' : ''} thirdbd px-4 py-3 greyscroll`}>
        <div className="d-flex align-items-center justify-content-between">
            <div className="fw-semibold text-secondary">Your Pages and Profile</div>
            <div className="">
                <i className="fas fa-ellipsis-h fa-sm cs-pointer fa-fw text-muted"></i>
            </div>
        </div>
        <div className="">
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} py-2 d-flex align-items-center rounded px-2 cs-pointer`}>
                <i className="fas fa-bullhorn fa-sm fa-fw"></i>
                <div className="fs-7 text-muted ms-4">Create Promotion</div>
            </div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
            <div className="fw-semibold text-secondary">Friend requests</div>
            <Link to="" className=''>See All</Link>
        </div>
        <div className="">
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex py-2 rounded px-2 cs-pointer`}>
                <div className="w-25"><img src={img2} alt="" className="frimg br-50 ob-cover" /></div>
                <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className={`${mode ? 'text-grey' : ''} fw-semibold`}>Grace Emmanuel</div>
                        <div className={`${mode ? 'text-muted' : ''} text-secondary fs-7`}>1W</div>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={img2} alt="" className="frmutual br-50" />
                        <div className={`${mode ? 'text-muted' : ''} fs-7 ms-2`}>3 mutual friends</div>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary px-4 py-1">Confirm</button>
                        <button className="btn bg-grey px-4 ms-3 py-1">Delete</button>
                    </div>
                </div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex py-2 rounded px-2 cs-pointer`}>
                <div className="w-25"><img src={img2} alt="" className="frimg br-50 ob-cover" /></div>
                <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className={`${mode ? 'text-grey' : ''} fw-semibold`}>Grace Emmanuel</div>
                        <div className={`${mode ? 'text-muted' : ''} text-secondary fs-7`}>1W</div>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={img2} alt="" className="frmutual br-50" />
                        <div className={`${mode ? 'text-muted' : ''} fs-7 ms-2`}>3 mutual friends</div>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary px-4 py-1">Confirm</button>
                        <button className="btn bg-grey px-4 ms-3 py-1">Delete</button>
                    </div>
                </div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex py-2 rounded px-2 cs-pointer`}>
                <div className="w-25"><img src={img2} alt="" className="frimg br-50 ob-cover" /></div>
                <div className="w-100">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className={`${mode ? 'text-grey' : ''} fw-semibold`}>Grace Emmanuel</div>
                        <div className={`${mode ? 'text-muted' : ''} text-secondary fs-7`}>1W</div>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src={img2} alt="" className="frmutual br-50" />
                        <div className={`${mode ? 'text-muted' : ''} fs-7 ms-2`}>3 mutual friends</div>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary px-4 py-1">Confirm</button>
                        <button className="btn bg-grey px-4 ms-3 py-1">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between">
            <div className="fw-semibold text-secondary">Contacts</div>
            <div className="d-flex align-items-center">
                <i className="fas fa-video fa-sm cs-pointer fa-fw text-muted px-3"></i>
                <i className="fas fa-search fa-sm cs-pointer fa-fw text-muted px-3"></i>
                <i className="fas fa-ellipsis-h fa-sm cs-pointer fa-fw text-muted px-3 "></i>
            </div>
        </div>
        <div className="">
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center w-100 py-2 rounded px-2 cs-pointer`}>
                <img src={img2} alt="" className="hmcontactimg br-50" />
                <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2`}>Nkwachukwu michael</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center w-100 py-2 rounded px-2 cs-pointer`}>
                <img src={img2} alt="" className="hmcontactimg br-50" />
                <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2`}>Nkwachukwu michael</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center w-100 py-2 rounded px-2 cs-pointer`}>
                <img src={img2} alt="" className="hmcontactimg br-50" />
                <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2`}>Nkwachukwu michael</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center w-100 py-2 rounded px-2 cs-pointer`}>
                <img src={img2} alt="" className="hmcontactimg br-50" />
                <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2`}>Nkwachukwu michael</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center w-100 py-2 rounded px-2 cs-pointer`}>
                <img src={img2} alt="" className="hmcontactimg br-50" />
                <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2`}>Nkwachukwu michael</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center w-100 py-2 rounded px-2 cs-pointer`}>
                <img src={img2} alt="" className="hmcontactimg br-50" />
                <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2`}>Nkwachukwu michael</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center w-100 py-2 rounded px-2 cs-pointer`}>
                <img src={img2} alt="" className="hmcontactimg br-50" />
                <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2`}>Nkwachukwu michael</div>
            </div>
        </div>
    </div>
  )
}

export default HomeRightside