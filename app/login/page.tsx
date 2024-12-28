import React from 'react'
import Link from 'next/link'
import '../src/CSS/Login.css'
const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <form id="signUp" method="post" >
                    <div className="login-fields">
                        <div className="login-email">
                            <label htmlFor="Email">E-mail Address</label>
                            <input
                                required
                                autoComplete="on"
                                name="Email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="login-password">
                            <label htmlFor="Password">Create Password</label>
                            <input
                                required
                                autoComplete="off"
                                name="Password"
                                type="password"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <p className="login-question">Don't have an account? <span><Link href="/sign-up">Sign Up</Link></span></p>
                    <button className="basic-button">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login