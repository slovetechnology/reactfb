import React from 'react';
import { useSelector } from 'react-redux';

const HeadAll = () => {
  const {mode} = useSelector((state) => state.toggleAction);
  return (
    <div className={`${mode ? 'lightdark' : 'bg-darklight'} hmuseraction2 rounded p-3 shadow`}>
      <div className={`${mode ? 'text-grey' : ''} h5 fw-bold`}>Menu</div>
      <div className='h-80vh position-relative overflow-y-auto greyscroll'>
        <div className={`${mode ? 'dark' : 'bg-white'} headall1 rounded shadow-sm p-3`}>
          <div className=''>
            <form className={`${mode ? 'formdark' : 'bg-light'} ms-2 rounded-pill py-0 px-3 d-flex align-items-center mhhdform`}>
              <i className='fas fa-search fa-sm text-secondary fa-fw'></i>
              <input
                type='text'
                placeholder='Search messenger'
                className='border-0 bg-transparent text-grey form-control d-none d-lg-block'
              />
            </form>
          </div>
          <div className={`${mode ? 'text-grey' : ''} py-3`}>
            <div className='h6 fw-bold'>Social</div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-calendar-check fa-lg fa-fw text-danger'></i>
              <div className='fw-bold ms-2 fs-7'>Events</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-user-friends fa-lg fa-fw text-primary'></i>
              <div className='fw-bold ms-2 fs-7'>Find Friends</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-users fa-lg fa-fw text-primary'></i>
              <div className='fw-bold ms-2 fs-7'>Groups</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-store fa-lg fa-fw text-primary'></i>
              <div className='fw-bold ms-2 fs-7'>News Feed</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-star fa-lg fa-fw text-warning'></i>
              <div className='fw-bold ms-2 fs-7'>Favourites</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-calendar-week text-success fa-lg fa-fw'></i>
              <div className='fw-bold ms-2 fs-7'>Most recent</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-flag fa-lg fa-fw text-danger'></i>
              <div className='fw-bold ms-2 fs-7'>Pages</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-clock fa-lg fa-fw text-primary'></i>
              <div className='fw-bold ms-2 fs-7'>Memories</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <i className='fas fa-bookmark fa-lg fa-fw text-primary'></i>
              <div className='fw-bold ms-2 fs-7'>Saved</div>
            </div>
            <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center hmleftlink w-100 rounded px-2 cs-pointer`}>
              <div className='bg-darklight br-50 pt-1'>
                <i className='fas fa-chevron-down fa-lg fa-fw text-primary'></i>
              </div>
              <div className='fw-bold ms-2 fs-7'>See more</div>
            </div>
          </div>
        </div>
        <div className={`${mode ? 'dark text-grey' : 'bg-white'} rounded shadow-sm p-3 headall2`}>
          <div className='h6 fw-bold'>Create</div>
          <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center py-2 rounded px-2 cs-pointer`}>
            <div className={`${mode ? 'formdark' : 'bg-darklight'} br-50 hmicon text-center`}>
              <i className='fas fa-edit fs-8 fa-fw'></i>{' '}
            </div>
            <div className='fs-7 fw-bold'>Post</div>
          </div>
          <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center py-2 rounded px-2 cs-pointer`}>
            <div className={`${mode ? 'formdark' : 'bg-darklight'} br-50 hmicon text-center`}>
              <i className='fas fa-book-open fs-8 fa-fw'></i>{' '}
            </div>
            <div className='fs-7 fw-bold'>Post</div>
          </div>
          <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center py-2 rounded px-2 cs-pointer`}>
            <div className={`${mode ? 'formdark' : 'bg-darklight'} br-50 hmicon text-center`}>
              <i className='fas fa-video fs-8 fa-fw'></i>{' '}
            </div>
            <div className='fs-7 fw-bold'>Room</div>
          </div>
          <hr />
          <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center py-2 rounded px-2 cs-pointer`}>
            <div className={`${mode ? 'formdark' : 'bg-darklight'} br-50 hmicon text-center`}>
              <i className='fas fa-flag fs-8 fa-fw'></i>{' '}
            </div>
            <div className='fs-7 fw-bold'>Page</div>
          </div>
          <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center py-2 rounded px-2 cs-pointer`}>
            <div className={`${mode ? 'formdark' : 'bg-darklight'} br-50 hmicon text-center`}>
              <i className='fas fa-bullhorn fs-8 fa-fw'></i>{' '}
            </div>
            <div className='fs-7 fw-bold'>Ad</div>
          </div>
          <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center py-2 rounded px-2 cs-pointer`}>
            <div className={`${mode ? 'formdark' : 'bg-darklight'} br-50 hmicon text-center`}>
              <i className='fas fa-users fs-8 fa-fw'></i>{' '}
            </div>
            <div className='fs-7 fw-bold'>Group</div>
          </div>
          <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center py-2 rounded px-2 cs-pointer`}>
            <div className={`${mode ? 'formdark' : 'bg-darklight'} br-50 hmicon text-center`}>
              <i className='fas fa-calendar-plus fs-8 fa-fw'></i>{' '}
            </div>
            <div className='fs-7 fw-bold'>Event</div>
          </div>
          <div className={`${mode ? 'mhpagelist2' : 'mhpagelist'} d-flex align-items-center py-2 rounded px-2 cs-pointer`}>
            <div className={`${mode ? 'formdark' : 'bg-darklight'} br-50 hmicon text-center`}>
              <i className='fas fa-shopping-basket fs-8 fa-fw'></i>{' '}
            </div>
            <div className='fs-7 fw-bold'>Marketplace Listing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadAll;
