import React, { useState } from 'react';
import LoginImage from '../../../assets/Image/Login/log.PNG'
import Logo from '../../../assets/Image/Logo/logo2.png'
import GoogleLogo from '../../../assets/Image/Login/icons8-google.svg'
import SharedNav from './SharedNav';
import { useForm } from 'react-hook-form';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Spinner from './Spinner/Spinner';
import toast from 'react-hot-toast';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const { http, setToken } = AuthUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    // const onSubmitForm = async (data) => {
    //     // console.log(data)
    //     http.post("/users/", {name: data.name, email: data.email, password: data.password, phone: data.phone }).then((res) => {
    //         console.log(res.data);
    //         setToken(res.data.data.email, res.data.data.access, res.data.data.role);
    //     });
    //     reset();
    // }

    // post user data to the backend
    const onSubmitForm = (data) => {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone
        }
        setLoading(true);
        fetch('https://gym-management97.herokuapp.com/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then(data => {
                setLoading(false);
                if (!data.success) {
                    if (data.error === 'user with this email already exists.') {
                        toast.error('User with this email already exists.')
                        return;
                    } else if (data.error) {
                        toast.error('Phone number should be start with +880')
                        return;
                    }
                } else {
                    toast.success('User created successfully, please login.')
                    navigate('/login')
                }
            })
            .catch(err => console.log(err))
    }


    // const onSubmitForm = async (data) => {
    //     const url = "https://gym-management97.herokuapp.com/api/users/";
    //     const res = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             name: data.name, email: data.email, password: data.password, phone: data.phone
    //         })
    //     });
    //     const data = await res.json();
    //     if (data.success === true) {
    //         navigate('/login')
    //     } else {
    //         console.log(data);
    //     }
    // }



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
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Name</label>
                                        <input className='py-3 px-5 bg-[#F2F2F2] rounded-md focus:outline-0' type="name" name="name" id="" placeholder='Your Name'
                                            {...register("name", {
                                                required: 'Name is required',
                                                pattern: {
                                                    value: 3,
                                                    message: 'Name must be at least 3 characters'
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('name')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.name?.message}</small>
                                    </div>

                                    <div className="flex  w-full mx-auto flex-col mt-5">
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

                                    <div className="flex  w-full mx-auto flex-col mt-5">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2' >Phone</label>
                                        <input className='py-3 rounded-md bg-[#F2F2F2] px-5 focus:outline-0' type="text" name="phone" id="" placeholder='Enter Phone Number'
                                            {...register('phone', {
                                                required: 'Phone is required',
                                                minLength: {
                                                    value: 11,
                                                    message: 'Minimum 11 character required'
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger('phone')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] ml-2 text-xs font-medium my-2'>{errors?.phone?.message}</small>
                                    </div>

                                    {/* <div className='flex mt-[35px] w-full mx-auto justify-between items-center mb-2'>

                            <div className="checkbpox_container w-[30%]">
                                <input type="checkbox" />
                            </div>
                            <div className="flex remember_forget items-center justify-between w-[70%]">
                                <span className='remember text-[14px]'>Remember Me</span>
                                <span className=' text-[14px] text-[#007AFF] cursor-pointer'>Forget Password</span>
                            </div>
                        </div> */}
                                    <div className="flex w-full mx-auto flex-col">
                                        <button className='btn bg-[rgb(0,122,255)] my-[20px] border-0 text-white font-semibold text-[17px] hover:bg-transparent hover:border-[#007AFF] hover:border hover:text-[#007AFF] ' type="submit">Sign Up</button>

                                        {/* <div className="divider">or</div>
                                        <button className='flex py-[4px] justify-center items-center border border-slate-600 rounded-lg hover:bg-[#333333] hover:text-white transition-all delay-75 ease-in-out'>
                                            <img className='w-[40px]' src={GoogleLogo} alt="" />
                                            <span className='font-semibold text-[17px] ml-3 '>Continue with google</span>
                                        </button> */}
                                    </div>
                                    <h1 className=' w-full text-[15px] mx-auto text-center mb-10 mt-[20px]'>Already have an account? <Link to='/login' className='text-[#007AFF] ml-3 cursor-pointer'>Login</Link></h1>
                                </form>
                            </div>
                        </div>
                    )
            }

        </>
    );
};

export default Register;