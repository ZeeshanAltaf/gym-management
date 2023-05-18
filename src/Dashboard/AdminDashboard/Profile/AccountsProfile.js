import React from 'react';
import img from '../../../assets/Image/profile/WhatsApp Image 2022-08-29 at 11.31.14 PM.jpeg'

const AccountsProfile = () => {
    return (
        <div className='p-5 mt-4'>
            <h2 className='text-2xl font-semibold'>Hello, Accounts!</h2>

            <div className='flex gap-7 mt-8'>
                <div className=''>
                    <img className='rounded w-40' src={img} alt="" />
                    <div className='text-center'>
                        <h2 className='text-sm font-semibold mt-5'>First & Last Name</h2>
                        <h2 className='text-sm font-semibold mt-2 text-primary'>Accounts</h2>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-3 text-warning'>Access Level:</h1>
                    <div className='grid sm:grid-cols-3 gap-3'>
                        <button className='btn btn-accent btn-sm font-bold ' >Transaction</button>
                        <button className='btn btn-accent btn-sm font-bold ' >Purchase</button>
                        <button className='btn btn-accent btn-sm font-bold' >Salary</button>
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

export default AccountsProfile;