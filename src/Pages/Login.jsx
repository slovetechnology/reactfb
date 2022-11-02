
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toggleRegform } from '../App/ToggleAction';
import Register from './Register';

const Login = () => {
    const {regform} = useSelector((state) => state.toggleAction)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [roll, setRoll] = useState(false);
    const [formerr, setFormerr] = useState({
        email: '',
        password: ''
    })
    const [forms, setForms] = useState({
        email: '',
        password: ''
    });

    const handleforms = e => {
        e.persist();
        setForms({...forms, [e.target.name]: e.target.value});
    }

    const loginuser = e => {
        e.preventDefault();
        if(forms.email !== '') {
            setFormerr({email: ''});
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
            setFormerr({email: 'formerr'});
        }
    }
  return (
    <>
    {regform && <Register />}
        <div className='row'>
            {roll && <div className="overlay"> <div className="spin"></div> </div>}
            <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-center w-100 h-100vh">
                    <div className="w-75">
                        <div className="display-5 fw-semibold text-success">goodyman</div>
                        <div className="display-5">Recent logins</div>
                        <div className="fs-8">Click your picture or add an account</div>
                        <div className="row">
                            <div className="col-4">
                                <div className="stboxlogin bg-white shadow-sm border">
                                    <div className="bg-darklight"></div>
                                    <div className="text-center py-2">Developer</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="stboxlogin bg-white shadow-sm border">
                                    <div className="bg-darklight"></div>
                                    <div className="text-center py-2">Developer</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="stboxlogin bg-white shadow-sm border">
                                    <div className="bg-light d-flex align-items-center justify-content-center"> <button className="btn btn-primary rounded-circle px-1" onClick={() => dispatch(toggleRegform())}><i className="fas fa-plus fa-lg fa-fw"></i></button> </div>
                                    <div className="text-center py-2 text-primary text-capitalize">Add account</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-center w-100 h-100vh">
                    <div className="w-350">
                        <div className="bg-white rounded p-3 shadow">
                            <form onSubmit={loginuser}>
                            <div className="form-group mb-3">
                                <input type="email" name="email" value={forms.email} onChange={handleforms} placeholder="Email Address" className={`form-control ${formerr.email}`} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" name="password" value={forms.password} onChange={handleforms} placeholder="Password" className={`form-control ${formerr.password}`} />
                            </div>
                            <button className="btn btn-primary w-100 py-2 fw-bold">Log in</button>
                            </form>
                            <div className="text-center mt-3 mb-4">
                                <Link to="" className='fs-8'>Forgot password?</Link>
                            </div>
                            <hr />
                            <div className="d-flex my-4 align-items-center justify-content-center">
                                <button className="btn btn-success px-5 text-capitalize py-2" onClick={() => dispatch(toggleRegform())}>create new account</button>
                            </div>
                        </div>
                        <div className="text-center text-muted fs-8 mt-4"><b>Create a page</b> for a celebrity, brand or business</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login