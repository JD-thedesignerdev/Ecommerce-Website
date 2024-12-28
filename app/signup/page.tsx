'use client'
import React from 'react'
import Link from 'next/link'
import '../src/CSS/SignUp.css'

const SignUp = () => {
  return (
    <div className="SignUp">
      <div className="SignUp-container">
        <h1>Create an account</h1>
        <form id="signUp" method="post" >
          <div className="SignUp-fields">
            <div className="field-name">
              <label htmlFor="Name">Name</label>
              <input
                // pattern="[a-z+A-Z*]"
                // there should probably be a pattern to stop malicous code
                autoComplete="on"
                required
                name="Name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="field-email">
              <label htmlFor="Email">E-mail Address</label>
              <input
                required
                autoComplete="on"
                name="Email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="field-password">
              <label htmlFor="Password">Create Password</label>
              <input
                required
                autoComplete="off"
                name="Password"
                type="password"
                placeholder="Enter your email"
              />
            </div>
            <div className="SignUp-agree">
              <input
                required
                name="Agreement"
                type="checkbox"
              />
              <label htmlFor="Agreement">By signing up you confirm you have read and agree to E-shop's<span> terms and conditions</span> of use and <span>privacy policy</span></label>
            </div>
          </div>
          <p className="SignUp-">Already have an account? <span><Link href="/"> here</Link></span></p>
          <button className="basic-button">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp