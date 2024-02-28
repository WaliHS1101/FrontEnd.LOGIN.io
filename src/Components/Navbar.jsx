import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>
                    <button className='btn btn-success d-block d-lg-none' data-bs-toggle="collapse" data-bs-target="#Account">Account</button>
                    <Link to="/" className='text-decoration-none'><span className='navbar-brand'>Your LOGO</span></Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#Nav-Bar"><span className='navbar-toggler-icon'></span></button>
                    <div className='collapse navbar-collapse justify-content-center' id='Nav-Bar'>
                        <ul className='navbar-nav'>
                            <li className='nav-item mx-lg-3'><Link to="/" className='nav-link'>Home</Link></li>
                            <li className='nav-item mx-lg-3'><Link to="About" className='nav-link'>About</Link></li>
                            <li className='nav-item mx-lg-3'><Link to="Service" className='nav-link'>Service</Link></li>
                            <li className='nav-item mx-lg-3'><Link to="Contact" className='nav-link'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to="SignUp" className='text-decoration-none'> <button className='btn btn-success d-none d-lg-block' data-bs-toggle="collapse" data-bs-target="#Account">Account</button></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar