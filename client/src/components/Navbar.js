import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/socialdeals-logo-op.png';
import LoggedInUser from './Navbar/LoggedInUser'
import Guest from './Navbar/Guest'

class Navbar extends Component {
    render() {
        let currentPage = window.location.pathname.substring(1)
        let pages = ['Feed', 'Hot Deals', 'Add']
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
                        {this.props.userAuth.id ? <LoggedInUser logoutClearState={this.props.logoutClearState} userAuth={this.props.userAuth} /> : <Guest />}
                    </div>
                </header>
            </div>

        )
    }
}

export default Navbar;

