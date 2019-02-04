import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div className="register-form">
                <h1>Register</h1>
                <form>
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.changeHandler} />
                    </div>
                    <div className="field passwords">
                        <div className="password">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.changeHandler} />
                        </div>
                        <div className="password">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.changeHandler} />
                        </div>
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.changeHandler} />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Register