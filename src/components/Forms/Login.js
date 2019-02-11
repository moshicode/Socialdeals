import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    onSubmit = async (e) => {
        e.preventDefault()
        let user = await axios.post('/api/users/login', {
            username: this.state.username,
            password: this.state.password
        })
        user = user.data
        if (user.username === this.state.username) {
            localStorage["username"] = user.username
            localStorage["id"] = user.id
            this.props.setLoggedInUser(user.id, user.username)
        }
    }

    showLoggedInuser() {
        return (
            <div>
                Hi {this.props.userAuth.username}
            </div>
        )
    }

    render() {
        if (this.props.userAuth.username) {
            return <Redirect to="/" />
        }
        return (
            <div className="login-form">
                <h1>Login</h1>
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
                    <div className="password">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="password"
                            value={this.state.password}
                            onChange={this.onChange} />
                    </div>
                    <button type="submit" className="action-btn">Log In</button>
                </form>
            </div>
        );
    }
}

export default Login