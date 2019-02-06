import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/socialdeals-logo-op.png';

const Navbar = () => {
    let currentPage = window.location.pathname.substring(1)
    let pages = ['Feeds', 'Hot Deals', 'Add']
    return (
        <div className="header-wrapper">
            <header className="header">
                <div className="logo">
                    <Link to='/'>
                        <img className="logo" src={logo} alt="Socialdeals" />
                    </Link>
                </div>
                <nav className="main-nav">
                    {pages.map((page, index) => currentPage === page ?
                        <Link key={index} to={page} className="active">{page}</Link> :
                        <Link key={index} to={page.toLowerCase()}>{page}</Link>)}
                </nav>
                <div className="user-minidash">
                    <Link to='/add'>
                        <i className="fa fa-plus add-icon" aria-hidden="true"></i>
                    </Link>
                    <Link to='register'>
                        <button>Sign Up</button>
                    </Link>
                    <Link to='login'>
                        <button>Log In</button>
                    </Link>
                </div>
            </header>
        </div>



    );
}

export default Navbar;

