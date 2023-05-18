import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { useQuery } from 'react-query';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import AddExpenseModal from '../Expense/AddExpenseModal';
import AddIncomeModal from './AddIncomeModal';

const Incomes = () => {
    const { token, getUser } = AuthUser()
    const [open, setOpen] = useState(false);

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    const [selectedDate, setSelectedDate] = useState(null);
    // const [filterExpenses, setFilterExpenses] = useState([]);


    const { data: incomes, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/income`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    //filter expenses by date and auto update when date is changed
    let filterIncomes;
    //filter expenses by date
    if (selectedDate) {
        filterIncomes = incomes?.data?.filter(incomes => {
            return incomes.expense_date === selectedDate;
        })
    }


    console.log(incomes)


    return (
        <div className='p-5 mt-4'>
            <div className='flex justify-between'>
                <h2 className='md:text-2xl text-xl font-semibold'>Hello, Manager</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm  font-bold text-secondary'>{date}</p>
                </div>
            </div>
            <h1 className='text-center md:text-2xl text-xl font-bold mt-4 md:mb-5 mb-5'>Income History</h1>

            <div className='md:flex justify-between items-center'>
                <div className="date_field flex md:w-[40%] w-full items-center mb-5 md:mb-0">
                    <p className='text-sm mr-5 font-bold w-fit text-secondary'>{selectedDate}</p>
                    <input onChange={(e) => {
                        setSelectedDate(e.target.value);
                    }} className='input w-[50%] input-bordered input-md cursor-pointer' type="date" />
                </div>
                {/* <div className="data_field flex md:w-[60%] w-full md:justify-end">
                    <button className='btn btn-sm btn-primary rounded-md mr-2'>All</button>
                    <button className='btn btn-sm btn-primary rounded-md mr-2'>Assets</button>
                    <button className='btn btn-sm btn-primary rounded-md'>Petty Cash</button>
                </div> */}
            </div>

            <AddIncomeModal refetch={refetch} />

            <div className='mt-10'>
                <div className='mb-5'>
                    <div className="overflow-x-auto ">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr className='bg-accent'>
                                    <th className='bg-accent'></th>
                                    <th className='bg-accent'>Name</th>
                                    <th className='bg-accent'>Date</th>
                                    <th className='bg-accent'>Amount</th>
                                    <th className='bg-accent'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectedDate && filterIncomes?.length > 0 ? (
                                        filterIncomes?.map((income, index) => {
                                            return (
                                                <tr>
                                                    <th>{++index}</th>
                                                    <td>{income?.name}</td>
                                                    <td>{income?.expense_date}</td>
                                                    <td className='font-bold'>৳ {income?.amount}</td>
                                                    <td><button className='btn lg:btn-sm btn-xs btn-warning text-white'>Details</button></td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        incomes?.data?.map((income, index) => {
                                            return (
                                                <tr>
                                                    <th>{++index}</th>
                                                    <td>{income?.name}</td>
                                                    <td>{income?.expense_date}</td>
                                                    <td className='font-bold'>৳ {income?.amount}</td>
                                                    <td><button className='btn lg:btn-sm btn-xs btn-warning text-white'>Details</button></td>
                                                </tr>
                                            )
                                        })
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Incomes;