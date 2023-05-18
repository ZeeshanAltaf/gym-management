import React from 'react';
import SalaryTable from './SalaryTable';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { TbCurrencyTaka } from 'react-icons/tb';
import { BsPlusLg } from 'react-icons/bs';
import { useQuery } from 'react-query';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import AddSalaryModal from './AddSalaryModal';

const Salary = () => {
    const { token } = AuthUser()


    const { data: salaryDetails, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/salary_overview`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())

    )
    if (isLoading) {
        return <Loading />
    }

    // console.log(salaryDetails)

    const salaryPaid = salaryDetails.data.filter(salary => {
        if (salary.status) {
            return salary
        }
    })
    const paidAmount = salaryPaid.reduce((acc, curr) => {
        return acc + curr.amount
    }, 0)

    const salaryUnPaid = salaryDetails.data.filter(salary => {
        if (salary.status === false) {
            return salary
        }
    })
    const unPaidAmount = salaryUnPaid.reduce((acc, curr) => {
        return acc + curr.amount
    }, 0)


    console.log(salaryDetails.data)


    return (
        <div className='p-5 mt-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Accounts!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>12 Apr 2022, Tuesday</p>
                    <div className='bg-accent px-3 py-2 rounded cursor-pointer'>
                        <BiSearch className='text-xl ' />
                    </div>
                    <div className='bg-info px-3 py-2 rounded cursor-pointer'>
                        <VscBellDot className='text-xl' />
                    </div>

                </div>
            </div>

            <div className='mt-7 border-b-[1px] pb-3 mb-5'>
                <h2 className='font-semibold'>Salary Overview</h2>
                <p className='text-secondary text-sm'>March 2022</p>
            </div>

            <div className='grid sm:grid-cols-3 bg-[#FEEDD1] lg:py-5'>
                <div className='flex items-center justify-center sm:border-r-2 sm:border-b-0 border-b-2 border-white'>
                    <div className='sm:py-8 pt-5 pb-2 text-center'>
                        <h1 className='font-bold text-xl text-center'>Total Pending</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl  font-semibold mr-4'><TbCurrencyTaka />100</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center sm:border-r-2 sm:border-b-0 border-b-2 border-white relative'>
                    <div className='text-primary sm:py-8 pt-5  pb-2 text-center'>
                        <h1 className='font-bold text-xl'>Total Unpaid</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl font-semibold mr-4'><TbCurrencyTaka />{unPaidAmount}</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center relative'>
                    <div className='text-success sm:py-8 pt-5 pb-4 text-center'>
                        <h1 className='font-bold text-xl'>Total Paid</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl font-semibold mr-4'><TbCurrencyTaka />{paidAmount}</h2>
                    </div>
                </div>

            </div>



            <div className='mb-8 flex justify-between items-center'>
                <p>03 Mar 2022, Thursday</p>
                <AddSalaryModal refetch={refetch} />
            </div>
            <SalaryTable salaryDetails={salaryDetails.data} />
        </div>
    );
};

export default Salary;