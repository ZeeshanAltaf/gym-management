import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import studentImage from '../../../assets/Image/TrainerDashboard/total_students.png'
import classesImage from '../../../assets/Image/TrainerDashboard/total_classes.png'
import { Navigate, useNavigate } from 'react-router-dom';

const TrainersHome = () => {
    const { token } = AuthUser();
    const navigate = useNavigate()
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    const [selectedDate, setSelectedDate] = useState(null);
    const [packages, setPackages] = useState([])
    const [packageDetails, setPackageDetails] = useState(null);
    const [packageId, setPackageId] = useState(6);
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalClasses, setTotalClasses] = useState(0);

    useEffect(() => {
        fetch('https://gym-management97.herokuapp.com/api/trainer_package', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setPackages(data))

    }, [token])


    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/package_users?package=${packageId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }, [token, packageId])

    const handlePackageClick = (id) => {
        setPackageId(id)
        fetch(`https://gym-management97.herokuapp.com/api/package_users?package=${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/trainer_activity`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setTotalStudents(data.data.total_students)
                setTotalClasses(data.data.total_class)
            })

    }, [])


    return (
        <div className='p-5  mt-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Trainer!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>{date}</p>
                    <div className='bg-accent px-3 py-2 rounded cursor-pointer'>
                        <BiSearch className='text-xl ' />
                    </div>
                    <div className='bg-info px-3 py-2 rounded cursor-pointer'>
                        <VscBellDot className='text-xl' />
                    </div>
                </div>
            </div>

            <div className="grid mt-16 grid-cols-1 lg:grid-cols-3">
                <div className="border-r px-5">
                    <div className="flex items-center lg:justify-between">
                        <h1 className='text-md font-bold'>Programs Post</h1>
                        <button className='bg-primary rounded-full h-8 text-2xl font-bold text-white w-8 ml-5 lg:ml-0'>+</button>
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
                            packages?.data?.map((pack, index) => {
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
                        <h1 className='text-md font-bold'>Students </h1>
                        <button className='bg-primary rounded-full h-8 text-2xl font-bold text-white w-8 ml-5 lg:ml-0'>+</button>
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
                        packageDetails?.data?.map((pack, index) => {
                            return (
                                <div className='my-8' key={index}>

                                    <div

                                        className="bg-white border-2 border-[#3D3270] student_card text-black flex items-center justify-between px-4 py-2">
                                        <div className="flex items-center gap-5">
                                            <div className='lg:w-1/4 w-1/5'>
                                                <img className='rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                                            </div>
                                            <div>
                                                <h1 className='text-[#3D3270] font-bold text-lg'>
                                                    {pack?.user?.name ? pack?.user?.name : 'Student Name'}
                                                </h1>
                                                <h1 className='text-[#3D3270] font-bold text-sm'>{pack?.package?.package_type?.package_title}</h1>
                                            </div>

                                        </div>
                                        <div>
                                            <BsFillArrowRightCircleFill className='h-8 cursor-pointer w-8' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <button
                        onClick={() => navigate('/dashboard/all-schedule')}
                        className='btn btn-primary'>All Schedule</button>
                </div>
                <div className="px-5 md:mt-0 mt-5">
                    <div className='w-1/4 text-center mx-auto'>
                        <img className='rounded-lg' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                    </div>
                    <div className='flex justify-center items-center gap-3 mt-3'>
                        <div className='text-center'>
                            <h1 className='text-[#3D3270] font-bold text-lg'>Trainer Name</h1>
                            <h1 className='text-primary font-bold text-md'>Trainer</h1>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center first-letter: justify-between lg:gap-0 gap-10 ">
                        <div>
                            <h1 className='text-[#3D3270] font-bold text-lg'>Total Students</h1>
                            <h1 className='text-primary font-bold text-2xl'>{totalStudents}</h1>
                        </div>
                        <div>
                            <img src={studentImage} alt="" />
                        </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between lg:gap-0 gap-10 ">
                        <div>
                            <h1 className='text-[#3D3270] font-bold text-lg'>Total Classes</h1>
                            <h1 className='text-primary font-bold text-2xl'>{totalClasses}</h1>
                        </div>
                        <div>
                            <img src={classesImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TrainersHome;