import React from 'react';
import LoginImage from '../../../assets/Image/Login/log.PNG'
import Logo from '../../../assets/Image/Logo/logo2.png'
import './Login.css'
import SharedNav from './SharedNav';

const Login = () => {

    
    return (
        <>
            <SharedNav />
            <div className='mid-container h-[100vh] flex items-center justify-evenly'>
                <div className="login_image hidden md:block">
                    <img src={LoginImage} alt="" />
                </div>
                <div className="login_form">
                    <div className="login_content ml-5 md:ml-0">
                        <img className='mx-auto' src={Logo} alt="" />
                        <div className="text text-center mt-2">Nice to see you again</div>
                        <form action="#">
                            <div className="field">
                                <span className="fa fa-user text-center"></span>
                                <input type="text" required />
                                <label>Email Id</label>
                            </div>
                            <div className="field">
                                <span className="fa fa-lock text-center"></span>
                                <input type="password" />
                                <label>Password</label>
                            </div>
                            <button className='login_button'>Log in</button>
                            <div className="or divider">Or</div>
                            <div className="icon-button text-center">
                                <span className="facebook"><i className="fa fa-facebook"></i>  Facebook</span>
                                <span><i className="fa fa-google"></i>  Google</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;