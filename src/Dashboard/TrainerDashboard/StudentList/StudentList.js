import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { useQuery } from 'react-query';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';

const StudentList = () => {
    const { token } = AuthUser();
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    const { data: students, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/all_students_of_trainer`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    console.log(students.data)

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
            <div className='mt-7 border-b-[1px] pb-2 mb-5'>
                <h1 className='font-bold text-xl'>Student List </h1>
            </div>

            <div className='mt-10'>
                <div className='mb-5'>
                    <div className="overflow-x-auto ">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr className='bg-accent'>
                                    <th className='bg-accent'>#</th>
                                    <th className='bg-accent'>Image</th>
                                    <th className='bg-accent'>Name</th>
                                    <th className='bg-accent'>email</th>
                                    <th className='bg-accent'>Mobile No</th>
                                    <th className='bg-accent'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students?.data?.map((student, index) => {
                                        return (
                                            <tr>
                                                <th>{++index}</th>
                                                <td><img className='w-10 rounded-full h-10' src={student?.profile_image
                                                } alt=""/></td>
                                                <td>{student?.name}</td>
                                            <td>{student?.email}</td>
                                                <td>{student?.phone}</td>
                                                <td><button className='btn lg:btn-sm btn-xs btn-warning text-white'>Details</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default StudentList; 