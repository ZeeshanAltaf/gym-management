import React, { useState } from 'react';
import img1 from '../../../assets/Image/UserDashboard/Frame original.png'
import img2 from '../../../assets/Image/UserDashboard/Frame.png'
import calc1 from '../../../assets/Image/UserDashboard/calculator/Group 4.png'
import calc2 from '../../../assets/Image/UserDashboard/calculator/Group 6.png'
import calc3 from '../../../assets/Image/UserDashboard/calculator/Group 7.png'
import body from '../../../assets/Image/UserDashboard/body.png'

const UsersHome = () => {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;
    const [selectedDate, setSelectedDate] = useState(null);


    return (
        <div className='p-5 mt-4 mb-32'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Users!</h2>
            </div>

            <div className='md:flex justify-between items-center sm:mt-8 mt-4'>
                <div className="date_field flex md:w-[40%] w-full items-center mb-5 md:mb-0">
                    {/* <p className='text-sm font-bold w-fit text-secondary'>{selectedDate}</p> */}
                    <input onChange={(e) => {
                        setSelectedDate(e.target.value);
                    }} className='input w-[50%] input-bordered input-md' type="date" />
                </div>
            </div>

            <div className='sm:grid grid-cols-2 lg:gap-20 gap-10 sm:mt-10 mt-8 border-b-2 pb-6'>
                <div>
                    <span className='bg-info py-2 px-8 font-bold  rounded-md cursor-pointer'>
                        Front
                    </span>

                    <div className='sm:mt-10 mt-7 grid grid-cols-2'>
                        <div>
                            <img className='' src={img1} alt="" />
                        </div>
                        <div className='md:text-end text-center grid '>
                            <p className='font-bold '>Neck</p>
                            <p className='font-bold '>Chest</p>
                            <p className='font-bold '>Shoulders</p>
                            <p className='font-bold '>Biceps</p>
                            <p className='font-bold '>Triceps</p>
                            <p className='font-bold '>Forearms</p>
                            <p className='font-bold '>Side Abs</p>
                            <p className='font-bold '>Abs</p>
                            <p className='font-bold '>Quadriceps</p>
                            <p className='font-bold '>Calves</p>
                        </div>
                    </div>
                </div>

                <div className='sm:mt-0 mt-10'>
                    <span className='bg-info py-2 px-8 font-bold  rounded-md cursor-pointer'>
                        Back
                    </span>

                    <div className='sm:mt-10 mt-7 grid grid-cols-2'>
                        <div>
                            <img className='' src={img2} alt="" />
                        </div>
                        <div className='md:text-end text-center grid'>
                            <p className='font-bold '>Neck</p>
                            <p className='font-bold '>Shoulders</p>
                            <p className='font-bold '>Forearms</p>
                            <p className='font-bold '>Uper Back</p>
                            <p className='font-bold '>Triceps</p>
                            <p className='font-bold '>Middle Back</p>
                            <p className='font-bold '>Lower Back</p>
                            <p className='font-bold '>Glutes</p>
                            <p className='font-bold '>Hamstrings</p>
                            <p className='font-bold '>Claves</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-10'>
                <div className='grid grid-cols-2 '>
                    <div>
                        <h1 className='font-bold text-2xl'>Muscle Name</h1>
                        <div className='sm:flex gap-5 items-center mt-3'>
                            <h1 className='text-primary font-bold'>Worked 148 Hour</h1>
                            <h1 className='text-secondary font-bold'>This Month</h1>
                        </div>
                    </div>
                    <div className='text-end'>
                        <button className='btn btn-primary px-10 font-bold text-white' type="">Check</button>
                    </div>
                </div>

                <div className='mt-10 sm:grid grid-cols-2 gap-10'>
                    <div>
                        <div>
                            <h1 className='md:text-3xl text-2xl'>Body mass index</h1>
                            <h2 className='sm:text-2xl text-xl font-bold'>Calculator</h2>
                        </div>
                        <div className='mt-5 flex items-center sm:gap-5 gap-3 border-b-2 pb-5 w-full'>
                            <div className='grid sm:gap-6 gap-3 w-[40%]'>
                                <img className='w-full' src={calc2} alt="" />
                                <img className='w-full' src={calc1} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <img className='w-full' src={calc3} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className='mt-7 mb-3'>
                                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold'>Body Measurements</h1>
                                <h1 className='text-secondary sm:text-md text-xs'>Last checked 2 Days Ago</h1>
                            </div>
                            <button className='btn btn-primary'>Inverted Triangle Body Shape</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 sm:mt-0 mt-10'>
                        <div className='mx-auto'>
                            <img src={body} alt="" />
                        </div>
                        <div className='sm:w-[80%] grid sm:gap-10 gap-5'>
                            <div className='bg-accent rounded-xl shadow px-5  flex items-center justify-center'>
                                <div className='text-center'>
                                    <h1 className='text-xl font-bold'>Chest (in)</h1>
                                    <h1 className='text-2xl font-bold'>44.5</h1>
                                </div>
                            </div>
                            <div className='bg-accent rounded-xl shadow px-5  flex items-center justify-center'>
                                <div className='text-center'>
                                    <h1 className='text-xl font-bold'>Waist (in)</h1>
                                    <h1 className='text-2xl font-bold'>34</h1>
                                </div>
                            </div>
                            <div className='bg-accent rounded-xl shadow px-5  flex items-center justify-center'>
                                <div className='text-center'>
                                    <h1 className='text-xl font-bold'>Hip (in)</h1>
                                    <h1 className='text-2xl font-bold'>42.5</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UsersHome;