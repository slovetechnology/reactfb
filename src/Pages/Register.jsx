
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toggleRegform } from '../App/ToggleAction';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [roll, setRoll] = useState(false);
    const [formerr, setFormerr] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
    })
    const [forms, setForms] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
    });
    const handleforms = e => {
        e.persist();
        setForms({...forms, [e.target.name]: e.target.value});
    }
    const saveuser = e => {
        e.preventDefault();
        if(forms.fname !== '') {
            setFormerr({fname: ''});
            if(forms.lname !== '') {
                setFormerr({lname: ''});
                if(forms.email !== '') {
                    setFormerr({email: ''});
                    if(forms.phone !== '') {
                        setFormerr({phone: ''});
                        if(forms.password !== '') {
                            setFormerr({password: ''});
                                setRoll(true);
                                setTimeout(() => {
                                    navigate('/')
                                }, 2000);
                        }else{
                            setFormerr({password: 'formerr'});
                        }
                    }else{
                        setFormerr({phone: 'formerr'});
                    }
                }else{
                    setFormerr({email: 'formerr'});
                }
            }else{
                setFormerr({lname: 'formerr'});
            }
        }else{
            setFormerr({fname: 'formerr'});
        }
    }
  return (
    <>
    
    {roll && <div className="overlay"> <div className="spin"></div> </div>}
    <div className="d-flex align-items-center justify-content-center w-100 vh-100 position-absolute top-0 left-0 regform z-index-2 position-fixed">
        <div className="w-350 shadow rounded bg-white">
            <div className="p-3 border-bottom">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="h3 fw-bold text-dark">Sign up</div>
                    <div className="cs-pointer text-secondary"> <i className="fas fa-times fa-lg fa-fw" onClick={() => dispatch(toggleRegform())}></i> </div>
                </div>
                <div className="fs-8 text-secondary">Its quick and easy</div>
            </div>
            <form className='p-3' onSubmit={saveuser}>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group position-relative mb-3">
                            <input type="text" name="fname" value={forms.fname} onChange={handleforms} placeholder="First Name" className={`${formerr.fname} form-control fs-8`} />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group position-relative mb-3">
                            <input type="text" name="lname" value={forms.lname} onChange={handleforms} placeholder="Last Name" className={`${formerr.lname} form-control fs-8`} />
                        </div>
                    </div>
                    <div className="form-group position-relative mb-3">
                        <input type="email" name="email" value={forms.email} onChange={handleforms} placeholder="Email Address" className={`${formerr.email} form-control fs-8`} />
                    </div>
                    <div className="form-group position-relative mb-3">
                        <input type="tel" name="phone" value={forms.phone} onChange={handleforms} placeholder="Mobile Number" className={`${formerr.phone} form-control fs-8`} />
                    </div>
                    <div className="form-group position-relative mb-3">
                        <input type="password" name="password" value={forms.password} onChange={handleforms} placeholder="New Password" className={`${formerr.password} form-control fs-8`} />
                    </div>
                    <div className="text-center fs-9 text-muted">By clicking Sign up, you agree to our <span className="text-primary">Terms, Privacy Policy</span> and <span className="text-primary">Cookies Policy</span> </div>
                    <div className="text-center fs-9 text-muted">You may recieve Email notification from us and can opt out at any time.</div>
                    <div className="text-center mt-3"> <button className="btn btn-success py-1 px-5 bg-gradient fw-semibold">Sign up</button> </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register