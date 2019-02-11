import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';

import axios from 'axios';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    onChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    onSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        await axios.post('/api/users/register', newUser)
        console.log(newUser)
    }


    render() {
        if (this.props.userAuth.id) {
            console.log('if user logged in')
        }
        return (
            <div className="register-form">
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            autoComplete="username"
                            value={this.state.username}
                            onChange={this.onChange} />
                    </div>
                    <div className="field passwords">
                        <div className="password">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="new-password"
                                value={this.state.password}
                                onChange={this.onChange} />
                        </div>
                        {/* <div className="password">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="new-password"
                                value={this.state.password}
                                onChange={this.onChange} />
                        </div> */}
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange} />
                    </div>
                    <button type="submit" className="action-btn">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Register