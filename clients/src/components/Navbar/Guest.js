import React from 'react';
import { Link } from 'react-router-dom';


const Guest = () => {
    return (
        <React.Fragment>
            <Link to='register'>
                <div className="reg-log-btn">Sign Up</div>
            </Link>
            <Link to='login'>
                <div className="reg-log-btn">Log In</div>
            </Link>
        </React.Fragment>

    )
}

export default Guest