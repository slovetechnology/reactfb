import React from 'react'
import { useSelector } from 'react-redux'

const HomeLeftside = () => {
  const {mode} = useSelector((state) => state.toggleAction);
  return (
    <div className={`${mode && 'dark'} firstbd px-4 py-3 greyscroll`}>
      <div className="">
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-user-circle fa-2x fa-fw text-secondary"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>George Godslove Developer</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-user-friends fa-lg fa-fw text-primary"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Find Friends</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-users fa-lg fa-fw text-primary"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Groups</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-store fa-lg fa-fw text-warning"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Marketplace</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-tv fa-lg fa-fw text-danger"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Watch</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-clock fa-lg fa-fw text-info"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Memories</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-bookmark fa-lg fa-fw text-primary"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Saved</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-flag fa-lg fa-fw text-warning"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Pages</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-calendar-check fa-lg fa-fw text-primary"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Events</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <i className="fas fa-calendar-week text-success fa-lg fa-fw"></i>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>Most recent</div>
        </div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <div className="bg-darklight br-50 pt-1"><i className="fas fa-chevron-down fa-lg fa-fw text-primary"></i></div>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>See more</div>
        </div>
        <hr />
        <div className="fw-semibold text-secondary">Your shortcuts</div>
        <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
          <div className="bg-darklight br-50 px-2 py-1 fw-bold">G</div>
          <div className={`${mode ? 'text-grey' : ''} fw-bold ms-2 fs-7`}>George Godslove Developer</div>
        </div>
            <div className="fs-7 text-muted">Privacy . Terms . Advertising . Ad choices . Cookies . More . Godslove &copy; 2022 </div>
      </div>
    </div>
  )
}

export default HomeLeftside