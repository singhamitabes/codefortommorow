import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard({settogglevalue}) {
    const [isOn, setIsOn] = useState(false);
    

    const toggle = () => {
        setIsOn(!isOn);
        settogglevalue(isOn)
    };
   
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 fw-bolder d-none d-sm-inline">Admin Dashboard</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li>
                                <h1 className='display-6'>Change Style</h1>
                                    <div className="btn-group " role="group" aria-label="Toggle button">
                                       
                                        <button
                                            type="button"
                                            className={`btn ${isOn ? 'btn-primary' : 'btn-secondary'}`}
                                            onClick={toggle}
                                        >
                                            <FontAwesomeIcon icon={isOn ? faToggleOn : faToggleOff} />
                                        </button>
                                    </div>
                                </li>

                                <li>
                                    <Link to="feedbackform" className="nav-link px-0 align-middle text-white">
                                        <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">We Are Listening</span></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col p-0 m-0">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>

    )
}
