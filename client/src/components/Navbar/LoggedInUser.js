import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedInUser extends Component {

    render() {
        console.log(this.props)
        const { userAuth } = this.props
        return (
            <React.Fragment>
                <div>Hello {userAuth.username}</div>
                <Link to='/add'>
                    <div className="reg-log-btn add-new">
                        <i className="fa fa-plus add-icon" aria-hidden="true"></i>Add New Deal</div>
                </Link>
                <Link to='/'>
                    <div className="reg-log-btn" onClick={this.props.logoutClearState} >Log Out</div>
                </Link>
            </React.Fragment>
        );
    }
}

// const LoggedInUser = () => {
//     return (

//     )
// }

export default LoggedInUser