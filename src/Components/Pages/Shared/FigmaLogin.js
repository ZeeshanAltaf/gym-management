import React, { useState } from 'react';
import LoginImage from '../../../assets/Image/Login/log.PNG'
import Logo from '../../../assets/Image/Logo/logo2.png'
import GoogleLogo from '../../../assets/Image/Login/icons8-google.svg'
import SharedNav from './SharedNav';
import { useForm } from 'react-hook-form';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { Link } from 'react-router-dom';
import Spinner from './Spinner/Spinner';
import toast from 'react-hot-toast';

const FigmaLogin = () => {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const { http, setToken } = AuthUser();
    const [loading, setLoading] = useState(false);


    const onSubmitForm = async (data) => {
        setLoading(true);
        http.post("/auth/", { email: data.email, password: data.password }).then((res) => {
            toast.success("Login Successful");
            setToken(res.data.data.email, res.data.data.access, res.data.data.role);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            toast.error("Login Failed");
        })
        reset();
    }

    return (
        <>
            <SharedNav />
            {
                loading ? <Spinner /> :
                    (
                        <div className='flex  justify-between min-h-[92vh]'>
                            <div className="login_image md:w-[60%] hidden  md:block">
                                <img className="w-full h-full" src={LoginImage} alt="" />
                            </div>
                            <div className="login_form md:w-[40%] w-full px-5 mt-10 ">

                                <img className='mx-auto' src={Logo} alt="" />
                                <h1 className="text-xl font-bold text-center mt-2 mb-3">Nice to see you again!</h1>


                                <form onSubmit={handleSubmit(onSubmitForm)} className="lg:w-[85%] md:w-full sm:w-2/3 w-full mx-auto">
                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Email</label>
                                        <input className='py-3 px-5 bg-[#F2F2F2] rounded-md focus:outline-0' type="email" name="email" id="" placeholder='Email or phone number'
                                            {...register("email", {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Please enter a valid Email"
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('email')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.email?.message}</small>
                                    </div>

                                    <div className="flex  w-full mx-auto flex-col mt-5">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2' >Password</label>
                                        <input className='py-3 rounded-md bg-[#F2F2F2] px-5 focus:outline-0' type="password" name="password" id="" placeholder='Enter password'
                                            {...register('password', {
                                                required: 'Password is required',
                                                minLength: {
                                                    value: 3,
                                                    message: 'Minimum 3 character required'
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger('password')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] ml-2 text-xs font-medium my-2'>{errors?.password?.message}</small>
                                    </div>

                                    <div className='flex mt-[35px] w-full mx-auto justify-between items-center'>

                                        <div className="checkbpox_container w-[30%]">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="flex remember_forget items-center justify-between w-[70%]">
                                            <span className='remember text-[14px]'>Remember Me</span>
                                            <span className=' text-[14px] text-[#007AFF] cursor-pointer'>Forget Password</span>
                                        </div>
                                    </div>
                                    <div className="flex w-full mx-auto flex-col">

                                        <button className='btn bg-[#007AFF] my-[20px] border-0 text-white font-semibold text-[17px] hover:bg-transparent hover:border-[#007AFF] hover:border hover:text-[#007AFF] ' type="submit">Sign In</button>

                                        {/* <div className="divider">or</div>
                                        <button className='flex py-[4px] justify-center items-center border border-slate-600 rounded-lg hover:bg-[#333333] hover:text-white transition-all delay-75 ease-in-out'>
                                            <img className='w-[40px]' src={GoogleLogo} alt="" />
                                            <span className='font-semibold text-[17px] ml-3 '>Continue with google</span>
                                        </button> */}
                                    </div>
                                    <h1 className=' w-full text-[15px] mb-10 mx-auto text-center mt-[20px]'>Don't have an account? <Link to='/register' className='text-[#007AFF] ml-3 cursor-pointer'>Sign Up</Link></h1>
                                </form>
                            </div>
                        </div>
                    )
            }

        </>
    );
};

export default FigmaLogin;