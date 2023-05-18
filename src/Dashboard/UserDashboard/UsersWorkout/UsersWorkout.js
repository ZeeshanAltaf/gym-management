import React, { useEffect, useState } from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import toast from 'react-hot-toast';

const UsersWorkout = () => {
    const { token } = AuthUser();
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    const [selectedDate, setSelectedDate] = useState(null);
    const [purchedPackages, setPurchedPackages] = useState([]);
    const [showSchedule, setShowSchedule] = useState(false);
    const [packageSchedule, setPackageSchedule] = useState(null);
    const [packageId, setPackageId] = useState(6);


    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/shedule?package=${packageId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPackageSchedule(data)
            })
    }, [packageId, token])

    useEffect(() => {
        fetch('https://gym-management97.herokuapp.com/api/user_package_order', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPurchedPackages(data);
            })
    }, [token])

    const handlePackageClick = (id) => {
        setShowSchedule(false)
        setPackageId(id)
        fetch(`https://gym-management97.herokuapp.com/api/shedule?package=${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setPackageSchedule(data)
                // console.log(data)
            })
    }

    console.log(purchedPackages)

    const handleConfirm = (schedule_id, package_id) => {
        // console.log(schedule_id, package_id)
        fetch(`https://gym-management97.herokuapp.com/api/confirm_shedule`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                shedule: schedule_id,
                package: package_id
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    if (!data.success && data.error === "The fields user_id, shedule_id must make a unique set.") {
                        toast.error('You have already booked this schedule')
                    } else if (!data.success) {
                        toast.error('Something went wrong')
                    } else {
                        toast.success('Schedule confirmed')
                    }
                }
            })
    }

    // console.log(packageSchedule);

    return (
        <div className="grid mt-16 grid-cols-1 lg:grid-cols-2">
            <div className="border-r px-5">
                <div className="flex items-center lg:justify-between">
                    <h1 className='text-md font-bold'>Programs</h1>
                    {/* <button className='bg-primary rounded-full h-8 text-2xl font-bold text-white w-8 ml-5 lg:ml-0'>+</button> */}
                </div>

                <div className='md:flex border-b py-5 justify-between items-center'>
                    <div className="date_field flex w-full items-center mb-5 md:mb-0">
                        <p className='text-sm mr-5 font-bold w-fit text-secondary'>{
                            selectedDate ? selectedDate : date
                        }</p>


                        <input onChange={(e) => {
                            setSelectedDate(e.target.value);
                        }} className='input w-[50%] input-bordered input-md cursor-pointer' type="date" />
                    </div>
                </div>

                {/* Packages part */}
                <div className='mt-10'>
                    {
                        purchedPackages?.data?.map((pack, index) => {
                            return (
                                <div className='my-8' key={index}>
                                    <h1 className='texxt-xl font-bold text-primary border-primary border w-fit px-5 py-1'>{pack?.package?.package_type?.package_title}</h1>
                                    <div
                                        onClick={() => { handlePackageClick(pack.package.id) }}
                                        className="bg-primary package_card text-white flex items-center justify-between px-4 py-2">
                                        <div className="">
                                            <h1 className='text-xl'>Total Time: <span className='font-bold'>{pack?.package?.duration_days} Days</span></h1>
                                            <div>
                                                <h1>Total Class: {pack?.package?.total_class}</h1>
                                                <h1>Total Consultation: {pack?.package?.total_consultation}</h1>
                                            </div>

                                        </div>
                                        <BsFillArrowRightCircleFill className='h-8 cursor-pointer w-8' />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className="px-5 border-r">
                <div className="flex items-center lg:justify-between">
                    <h1 className='text-md font-bold'>Schedule</h1>
                    {/* <button className='bg-primary rounded-full h-8 text-2xl font-bold text-white w-8 ml-5 lg:ml-0'>+</button> */}
                </div>

                <div className='md:flex border-b py-5 justify-between items-center'>
                    <div className="date_field flex w-full items-center mb-5 md:mb-0">
                        <p className='text-sm mr-5 font-bold w-fit text-secondary'>{
                            selectedDate ? selectedDate : date
                        }</p>


                        <input onChange={(e) => {
                            setSelectedDate(e.target.value);
                        }} className='input w-[50%] input-bordered input-md cursor-pointer' type="date" />
                    </div>
                </div>

                {
                    !showSchedule && packageSchedule?.data?.map((pack, index) => {
                        return (
                            <div className='my-8' key={index}>

                                <div

                                    className="bg-white border-2 border-[#3D3270] student_card text-black flex items-center justify-between px-4 py-2">
                                    <div className="flex items-center gap-5">
                                        <div>
                                            <h1 className='text-[#3D3270] font-extrabold text-xl'>
                                                {pack?.day}
                                            </h1>
                                            <h1 className='text-[#3D3270] font-extrabold text-sm'>{pack?.from_time} AM - {pack?.to_time} AM</h1>
                                        </div>

                                    </div>
                                    <div>
                                        <button
                                            onClick={() => { handleConfirm(pack.id, packageId) }}
                                            className="btn btn-primary btn-xs">Confirm</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default UsersWorkout;