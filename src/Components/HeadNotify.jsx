import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import img2 from "../imgs/2.jpg"

const HeadNotify = () => {
    const {mode} = useSelector((state) => state.toggleAction);
  return (
    <div className={`${mode ? 'lightdark' : 'bg-white'} hmuseraction rounded p-3 shadow`}>
        <div className="d-flex align-items-center justify-content-between">
            <div className={`${mode ? 'text-grey' : ''} fw-bold h5`}>Notifications</div>
            <div className=""> <i className="fas fa-ellipsis-h fa-sm fa-fw cs-pointer"></i> </div>
        </div>
        <div className="d-flex align-items-center">
            <div className="fs-8 text-primary bg-aliceblue br-50 py-1 px-2">All</div>
            <div className={`${mode ? 'text-grey' : ''} ms-4 fs-8`}>Unread</div>
        </div>
        <div className="d-flex align-items-center justify-content-between py-2">
            <div className={`${mode ? 'text-grey' : ''} fs-6 fw-semibold`}>New</div>
            <Link className="fs-8">See all</Link>
        </div>
        {/* listed notification */}
        <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} cs-pointer px-2 rounded d-flex align-items-center justify-content-between py-1`}>
            <div className="d-flex align-items-center gap-2 w-100">
                <div className="position-relative w-25">
                    <img src={img2} alt="" className="frimg br-50 ob-cover" />
                    <div className="position-absolute noteimg bg-primary br-50"> <i className="fas fa-tv fa-xs fa-fw text-white"></i> </div>
                </div>
                <div className={mode ? 'text-grey' : ''}>
                    <span className="fw-bold fs-7">Mr just-2-funny comedy skit </span>
                    <span className='fs-7'>posted an update that might interest you</span>
                    <div className="text-primary fs-7">4 weeks ago</div>
                </div>
            </div>
            <div className=""> <i className="fas fa-circle fa-xs fs-7 fa-fw text-primary"></i> </div>
        </div>
        {/* ends above */}
        {/* listed notification */}
        <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} cs-pointer px-2 rounded d-flex align-items-center justify-content-between py-1`}>
            <div className="d-flex align-items-center gap-2 w-100">
                <div className="position-relative w-25">
                    <img src={img2} alt="" className="frimg br-50 ob-cover" />
                    <div className="position-absolute noteimg bg-primary br-50"> <i className="fas fa-tv fa-xs fa-fw text-white"></i> </div>
                </div>
                <div className={mode ? 'text-grey' : ''}>
                    <span className="fw-bold fs-7">Mr just-2-funny comedy skit </span>
                    <span className='fs-7'>posted an update that might interest you</span>
                    <div className="text-primary fs-7">4 weeks ago</div>
                </div>
            </div>
            <div className=""> <i className="fas fa-circle fa-xs fs-7 fa-fw text-primary"></i> </div>
        </div>
        {/* ends above */}
        {/* listed notification */}
        <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} cs-pointer px-2 rounded d-flex align-items-center justify-content-between py-1`}>
            <div className="d-flex align-items-center gap-2 w-100">
                <div className="position-relative w-25">
                    <img src={img2} alt="" className="frimg br-50 ob-cover" />
                    <div className="position-absolute noteimg bg-primary br-50"> <i className="fas fa-tv fa-xs fa-fw text-white"></i> </div>
                </div>
                <div className={mode ? 'text-grey' : ''}>
                    <span className="fw-bold fs-7">Mr just-2-funny comedy skit </span>
                    <span className='fs-7'>posted an update that might interest you</span>
                    <div className="text-primary fs-7">4 weeks ago</div>
                </div>
            </div>
            <div className=""> <i className="fas fa-circle fa-xs fs-7 fa-fw text-primary"></i> </div>
        </div>
        {/* ends above */}
        {/* listed notification */}
        <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} cs-pointer px-2 rounded d-flex align-items-center justify-content-between py-1`}>
            <div className="d-flex align-items-center gap-2 w-100">
                <div className="position-relative w-25">
                    <img src={img2} alt="" className="frimg br-50 ob-cover" />
                    <div className="position-absolute noteimg bg-primary br-50"> <i className="fas fa-tv fa-xs fa-fw text-white"></i> </div>
                </div>
                <div className={mode ? 'text-grey' : ''}>
                    <span className="fw-bold fs-7">Mr just-2-funny comedy skit </span>
                    <span className='fs-7'>posted an update that might interest you</span>
                    <div className="text-primary fs-7">4 weeks ago</div>
                </div>
            </div>
            <div className=""> <i className="fas fa-circle fa-xs fs-7 fa-fw text-primary"></i> </div>
        </div>
        {/* ends above */}
        {/* listed notification */}
        <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} cs-pointer px-2 rounded d-flex align-items-center justify-content-between py-1`}>
            <div className="d-flex align-items-center gap-2 w-100">
                <div className="position-relative w-25">
                    <img src={img2} alt="" className="frimg br-50 ob-cover" />
                    <div className="position-absolute noteimg bg-primary br-50"> <i className="fas fa-tv fa-xs fa-fw text-white"></i> </div>
                </div>
                <div className={mode ? 'text-grey' : ''}>
                    <span className="fw-bold fs-7">Mr just-2-funny comedy skit </span>
                    <span className='fs-7'>posted an update that might interest you</span>
                    <div className="text-primary fs-7">4 weeks ago</div>
                </div>
            </div>
            <div className=""> <i className="fas fa-circle fa-xs fs-7 fa-fw text-primary"></i> </div>
        </div>
        {/* ends above */}
        {/* listed notification */}
        <div className={`${mode ? 'mhpagelist3' : 'mhpagelist'} cs-pointer px-2 rounded d-flex align-items-center justify-content-between py-1`}>
            <div className="d-flex align-items-center gap-2 w-100">
                <div className="position-relative w-25">
                    <img src={img2} alt="" className="frimg br-50 ob-cover" />
                    <div className="position-absolute noteimg bg-primary br-50"> <i className="fas fa-tv fa-xs fa-fw text-white"></i> </div>
                </div>
                <div className={mode ? 'text-grey' : ''}>
                    <span className="fw-bold fs-7">Mr just-2-funny comedy skit </span>
                    <span className='fs-7'>posted an update that might interest you</span>
                    <div className="text-primary fs-7">4 weeks ago</div>
                </div>
            </div>
            <div className=""> <i className="fas fa-circle fa-xs fs-7 fa-fw text-primary"></i> </div>
        </div>
        {/* ends above */}
    </div>
  )
}

export default HeadNotify