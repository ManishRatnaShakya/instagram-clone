import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <span></span>
            <span className="login-wrapper">
                
                <span className="phone"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResBTogH7UQ7Pb15WRkK1jUp0It4uXRp1-mw&usqp=CAU" alt ="phone"/>
                </span>
                <span className="login-form">
                    <span className="login-field">
                        <div className="logo">
                            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"  alt="logo"/>
                        </div>
                        <div>
                            <input type="text" placeholder="Phone,email or username"/> 
                        </div>
                        <div>  
                            <input type="text" placeholder="Password"/> 
                        </div>
                        <button >Login</button>  

                        <p>forgot password?</p>
                    </span>

                    <span className="no-account">
                        <p> Don't have an account? Sign up</p>
                    </span>
                    <span className="get-app">
                        <p>Get the app</p>
                        <img  className="app-store" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="app-store"/>
                        <img className="play-store" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="google-play"/>
                    </span>
                </span>
            </span>

        <span></span>
        </div>
    )
}

export default Login
