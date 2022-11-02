
import Header from '../Components/Header'
import HomeLeftside from '../Components/HomeLeftside'
import HomeRightside from '../Components/HomeRightside'
import Status from '../Components/Status'
import img3 from "../imgs/3.png"
import img2 from "../imgs/2.jpg"
import img6 from "../imgs/6.jpg"
import img7 from "../imgs/7.jpg"
import { useSelector } from 'react-redux'
const Home = () => {
    const {mode} = useSelector((state) => state.toggleAction);
    return (
        <div className={mode ? 'dark' : 'light'}>
            <Header />
            <div className={`${mode ? 'dark' : ''} mainbody d-flex align-items-center`}>
                <div className="d-none d-lg-block"><HomeLeftside /> </div>
                <div className={`${mode ? 'dark' : 'light'} secondbd`}>
                    <Status />
                    <div className="container mt-4 pb-5">
                        <div className={`${mode ? 'lightdark' : 'bg-white'} rounded p-4 shadow-sm`}>
                            <div className="d-flex align-items-center">
                                <div className=""> <i className="fas fa-user-circle fa-2x text-muted fa-fw"></i> </div>
                                <div className={`${mode ? 'formdark text-grey' : 'bg-darklight'} cs-pointer w-100 rounded-pill py-2 px-3`}>What's on your mind, Godslove</div>
                            </div>
                            <hr />
                            <div className="d-flex align-items-center justify-content-between mkuploads">
                                <div className="py-2 px-3 rounded-pill cs-pointer"> <i className="fas fa-video fa-lg fa-fw text-danger"></i> <span className={mode ? 'text-grey' : 'text-secondary'}>Live Video</span> </div>
                                <div className="py-2 px-3 rounded-pill cs-pointer"> <i className="fas fa-file-image fa-lg fa-fw text-success"></i> <span className={mode ? 'text-grey' : 'text-secondary'}>Photo/Video </span></div>
                                <div className="py-2 px-3 rounded-pill cs-pointer"> <i className="fas fa-grin fa-lg fa-fw text-warning"></i> <span className={mode ? 'text-grey' : 'text-secondary'}>Feeling/Actvity</span> </div>
                            </div>
                        </div>
                        <div className={`${mode ? 'lightdark' : 'bg-white'} rounded p-4 shadow-sm mt-4`}>
                            <div className="d-flex align-items-center gap-3">
                                <button className="btn btn-outline-primary rounded-pill px-2 py-1"> <i className="fas me-3 fa-video fa-lg fa-fw text-danger"></i>Create Room </button>
                                <img src={img2} alt="" className="smcircle ob-cover cs-pointer" />
                                <img src={img6} alt="" className="smcircle ob-cover cs-pointer" />
                            </div>
                        </div>
                        {/* the main timeline goes in here */}
                        
                        <div className={`${mode ? 'lightdark' : 'bg-white'} rounded shadow-sm mt-4`}>
                            <div className="py-2 px-3 d-flex align-items-center justify-content-between">
                                <div className="d-flex">
                                    <img src={img2} alt="" className="timg br-50 cs-pointer" />
                                    <div className="ms-2">
                                        <div className={`${mode ? 'text-muted' : ''} fw-semibold`}>George Godslove <i className="fas fa-check-circle fa-xs fa-fw text-primary"></i> </div>
                                        <div className="fs-7 text-secondary">Relationship Advice. 3 days ago. <i className="fas fa-globe fa-sm fa-fw"></i></div>
                                    </div>
                                </div>
                                <div className=""> <i className="fas fa-ellipsis-h fa-lg text-muted fa-fw cs-pointer"></i> </div>
                            </div>
                            <div className=""> <img src={img6} alt="" className="w-100 mainimg ob-cover" /> </div>
                            <div className="py-2 px-3">
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <div className="btn btn-sm btn-primary br-50 px-1 py-0"> <i className="fas fa-thumbs-up fa-sm fa-fw"></i> </div> 255</div>
                                    <div className="d-flex align-items-center">
                                        <div className={`${mode ? 'text-muted' : ''} me-3`}>117 comments</div>
                                        <div className={mode ? 'text-muted' : ''}> 24 shares</div>
                                    </div>
                                </div>
                                <div className="mainactions d-flex align-items-center py-1 justify-content-between border-top">
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-thumbs-up fa-lg fa-fw"></i> Like </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-comment-alt fa-lg fa-fw"></i> Comment </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-share fa-lg fa-fw"></i> Share </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-user-circle fa-lg fa-fw"></i> <i className="fas fa-caret-down fa-sm fa-fw"></i> </div>
                                </div>
                            </div>
                        </div>
    
                        {/* ================= ends above */}
                        {/* the main timeline goes in here */}
                        
                        <div className={`${mode ? 'lightdark' : 'bg-white'} rounded shadow-sm mt-4`}>
                            <div className="py-2 px-3 d-flex align-items-center justify-content-between">
                                <div className="d-flex">
                                    <img src={img6} alt="" className="timg br-50 cs-pointer" />
                                    <div className="ms-2">
                                        <div className={`${mode ? 'text-muted' : ''} fw-semibold`}>George Godslove <i className="fas fa-check-circle fa-xs fa-fw text-primary"></i> </div>
                                        <div className="fs-7 text-secondary">Relationship Advice. 3 days ago. <i className="fas fa-globe fa-sm fa-fw"></i></div>
                                    </div>
                            </div>
                                <div className=""> <i className="fas fa-ellipsis-h fa-lg text-muted fa-fw cs-pointer"></i> </div>
                            </div>
                            <div className=""> <img src={img7} alt="" className="w-100 mainimg ob-cover" /> </div>
                            <div className="py-2 px-3">
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <div className="btn btn-sm btn-primary br-50 px-1 py-0"> <i className="fas fa-thumbs-up fa-sm fa-fw"></i> </div> 255</div>
                                    <div className="d-flex align-items-center">
                                        <div className={`${mode ? 'text-muted' : ''} me-3`}>117 comments</div>
                                        <div className={mode ? 'text-muted' : ''}> 24 shares</div>
                                    </div>
                                </div>
                                <div className="mainactions d-flex align-items-center py-1 justify-content-between border-top">
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-thumbs-up fa-lg fa-fw"></i> Like </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-comment-alt fa-lg fa-fw"></i> Comment </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-share fa-lg fa-fw"></i> Share </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-user-circle fa-lg fa-fw"></i> <i className="fas fa-caret-down fa-sm fa-fw"></i> </div>
                                </div>
                            </div>
                        </div>
    
                        {/* ================= ends above */}
                        {/* the main timeline goes in here */}
                        
                        <div className={`${mode ? 'lightdark' : 'bg-white'} rounded shadow-sm mt-4`}>
                            <div className="py-2 px-3 d-flex align-items-center justify-content-between">
                                <div className="d-flex">
                                    <img src={img6} alt="" className="timg br-50 cs-pointer" />
                                    <div className="ms-2">
                                        <div className={`${mode ? 'text-muted' : ''} fw-semibold`}>George Godslove <i className="fas fa-check-circle fa-xs fa-fw text-primary"></i> </div>
                                        <div className="fs-7 text-secondary">Relationship Advice. 3 days ago. <i className="fas fa-globe fa-sm fa-fw"></i></div>
                                    </div>
                                </div>
                                <div className=""> <i className="fas fa-ellipsis-h fa-lg text-muted fa-fw cs-pointer"></i> </div>
                            </div>
                            <div className=""> <img src={img3} alt="" className="w-100 mainimg ob-cover" /> </div>
                            <div className="py-2 px-3">
                                <div className="d-flex align-items-center justify-content-between py-2">
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <div className="btn btn-sm btn-primary br-50 px-1 py-0"> <i className="fas fa-thumbs-up fa-sm fa-fw"></i> </div> 255</div>
                                    <div className="d-flex align-items-center">
                                        <div className={`${mode ? 'text-muted' : ''} me-3`}>117 comments</div>
                                        <div className={mode ? 'text-muted' : ''}> 24 shares</div>
                                    </div>
                                </div>
                                <div className="mainactions d-flex align-items-center py-1 justify-content-between border-top">
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-thumbs-up fa-lg fa-fw"></i> Like </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-comment-alt fa-lg fa-fw"></i> Comment </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-share fa-lg fa-fw"></i> Share </div>
                                    <div className={`${mode ? 'text-muted' : ''} cs-pointer`}> <i className="fas fa-user-circle fa-lg fa-fw"></i> <i className="fas fa-caret-down fa-sm fa-fw"></i> </div>
                                </div>
                            </div>
                        </div>
    
                        {/* ================= ends above */}
                    </div>
                </div>
                <div className="d-none d-md-block">
                    <HomeRightside />
                </div>
            </div>
        </div>
    )
}

export default Home