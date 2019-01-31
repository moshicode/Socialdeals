import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
    let currentPage = window.location.pathname.substring(1)
    let pages = ['Feeds', 'Top 10', 'Add']
    return (
        <header>
            <div id="header-child">
                <div id="logo">
                    <Link to='/'>
                        <img className="logo" src={logo} alt="Socialdeals" />
                    </Link>
                </div>
                <div className="nav">
                    {pages.map((page, index) => currentPage === page ?
                        <Link key={index} to={page} className="active">{page}</Link> :
                        <Link key={index} to={page.toLowerCase()}>{page}</Link>)}
                </div>
                <div className="user">
                    <button className="btn btn-add-deal"><i className="fa fa-plus" aria-hidden="true"></i></button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

