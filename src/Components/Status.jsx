import React from 'react'
import { useSelector } from 'react-redux'

const Status = () => {
    const {mode} = useSelector((state) => state.toggleAction);
  return (
    <div className='pt-3 stboxdiv px-3'>
        <div className={`${mode ? 'formdark' : 'bg-stbox'} stbox`}>
            <div className={`${mode ? 'bg-secondary' : 'bg-grey'} stboxin`}></div>
        </div>
        <div className={`${mode ? 'formdark' : 'bg-stbox'} stbox`}>
            <div className={`${mode ? 'bg-secondary' : 'bg-grey'} stboxin`}></div>
        </div>
        <div className={`${mode ? 'formdark' : 'bg-stbox'} stbox`}>
            <div className={`${mode ? 'bg-secondary' : 'bg-grey'} stboxin`}></div>
        </div>
        <div className={`${mode ? 'formdark' : 'bg-stbox'} stbox`}>
            <div className={`${mode ? 'bg-secondary' : 'bg-grey'} stboxin`}></div>
        </div>
        <div className={`${mode ? 'formdark' : 'bg-stbox'} stbox`}>
            <div className={`${mode ? 'bg-secondary' : 'bg-grey'} stboxin`}></div>
        </div>
        <div className="stboxmore cs-pointer"> <i className="fas cs-pointer fa-arrow-right fa-lg fa-fw text-secondary"></i> </div>
    </div>
  )
}

export default Status