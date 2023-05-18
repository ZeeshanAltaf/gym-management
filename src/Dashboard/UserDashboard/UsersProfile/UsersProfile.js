import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import img from '../../../assets/Image/profile/WhatsApp Image 2022-08-29 at 11.31.14 PM.jpeg'
import AuthUser from '../../../hooks/AuthUser/AuthUser';

const UsersProfile = () => {
    const { token } = AuthUser()
    const [userPackage, setUserPackage] = useState([])

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/user_package_order`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUserPackage(data)
            }
            )
    }, [])
    console.log(userPackage)
    return (
        <div className='p-5 mt-4'>
            <h2 className='text-2xl font-semibold'>Hello, User!</h2>

            <div className='flex gap-7 mt-8'>
                <div className=''>
                    <img className='rounded w-40' src={img} alt="" />
                    <div className='text-center'>
                        <h2 className='text-sm font-semibold mt-5'>First & Last Name</h2>
                        <h2 className='text-sm font-semibold mt-2 text-primary'>User</h2>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div>
                        <h1 className='text-xl font-bold mb-3 text-warning'>Workout Plan:</h1>
                        <div className='grid sm:grid-cols-3 gap-3'>
                            <button className='btn btn-primary btn-sm font-bold ' >CrossFit</button>
                            <button className='btn btn-accent btn-sm font-bold ' >Yoga</button>
                            <button className='btn btn-accent btn-sm font-bold' >Freehand</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-lg font-bold mb-3 text-[#595085]'>Subscriber Plan:</h1>
                        <button className='btn btn-primary btn-sm font-bold mr-3 mb-3' >Monthly</button>
                        <button className='btn btn-accent btn-sm font-bold mr-3' >12 Days left</button>
                    </div>
                </div>

            </div>

            <div className='mt-5  '>
                <div className='grid grid-cols-2 gap-5 border-dashed border-b-2 pb-10'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5 pt-8 pb-5'>
                    <h1>Information Section 02</h1>
                    <h1>Information Section 02</h1>
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Text Level 01</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full focus:outline-none shadow" />
                    </div>
                </div>

                <button className='btn btn-primary btn-sm px-4 mt-10 mb-32' type="submit">Update</button>
            </div>
        </div>
    );
};

export default UsersProfile;