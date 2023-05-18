import React, { useState } from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import AddExpenseModal from './AddExpenseModal';
import { useQuery } from 'react-query';


const Expense = () => {
    const { token, getUser } = AuthUser()
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;

    const [selectedDate, setSelectedDate] = useState(null);

    const [allData, setAllData] = useState(true);
    const [assets, setAssets] = useState([]);
    const [assetsBullian, setAssetsBullian] = useState(false);
    const [pettyCash, setSetPettyCash] = useState([]);
    const [pettyCashBullian, setPettyCashBullian] = useState(false);

    const { data: expenses, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/expense`, {
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
    let filterExpenses;
    //filter expenses by date
    if (selectedDate) {
        filterExpenses = expenses?.data?.filter(expense => {
            return expense.expense_date === selectedDate;
        })
    }



    const handleAssets = () => {
        setAllData(false);
        setPettyCashBullian(false);
        setAssetsBullian(true);
        pettyCash.length = 0;

        const asset = expenses?.data?.filter(expense => {
            if (expense.amount > 500) {
                return expense;
            }
        }
        )
        setAssets(asset);
    }

    const handlePettyCash = () => {
        setAllData(false);
        setPettyCashBullian(true);
        setAssetsBullian(false);
        assets.length = 0;

        const pettyCash = expenses?.data?.filter(expense => {
            if (expense.amount <= 500) {
                return expense;
            }
        }
        )
        setSetPettyCash(pettyCash);
    }

    // console.log(handlePettyCash());
    console.log(assets, "assets", pettyCash, "pettyCash");


    return (
        <div className='p-5 mt-4'>
            <div className='flex justify-between'>
                <h2 className='md:text-2xl text-xl font-semibold'>Hello, Manager</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm  font-bold text-secondary'>{date}</p>
                </div>
            </div>
            <h1 className='text-center md:text-2xl text-xl font-bold mt-4 md:mb-5 mb-5'>Expense History</h1>

            <div className='md:flex justify-between items-center'>
                <div className="date_field flex md:w-[40%] w-full items-center mb-5 md:mb-0">
                    <p className='text-sm mr-5 font-bold w-fit text-secondary'>{selectedDate}</p>
                    <input onChange={(e) => {
                        setSelectedDate(e.target.value);
                    }} className='input w-[50%] input-bordered input-md' type="date" />
                </div>
                <div className="data_field flex md:w-[60%] w-full md:justify-end">
                    <button
                        onClick={() => setAllData(true)}
                        className='btn btn-sm btn-primary rounded-md mr-2'>All</button>
                    <button
                        onClick={() => {
                            handleAssets();
                        }}
                        className='btn btn-sm btn-primary rounded-md mr-2'>Assets</button>
                    <button
                        onClick={() => {
                            handlePettyCash();
                        }}
                        className='btn btn-sm btn-primary rounded-md'>Petty Cash</button>
                </div>
            </div>

            <AddExpenseModal refetch={refetch} />

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
                                    <th className='bg-accent'>Payment Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectedDate && filterExpenses?.length > 0 ? (
                                        filterExpenses?.map((expense, index) => {
                                            return (
                                                <tr>
                                                    <th>{++index}</th>
                                                    <td>{expense?.name}</td>
                                                    <td>{expense?.expense_date}</td>
                                                    <td className='font-bold'>৳ {expense?.amount}</td>
                                                    <td><button className='btn lg:btn-sm btn-xs btn-warning text-white'>Details</button></td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                        allData ?
                                            (expenses?.data?.map((expense, index) => {
                                                return (
                                                    <tr>
                                                        <th>{++index}</th>
                                                        <td>{expense?.name}</td>
                                                        <td>{expense?.expense_date}</td>
                                                        <td className='font-bold'>৳ {expense?.amount}</td>
                                                        <td><button className='btn lg:btn-sm btn-xs btn-warning text-white'>Details</button></td>
                                                    </tr>
                                                )
                                            })) :
                                            assets?.length > 0 ?
                                                (assets?.map((expense, index) => {
                                                    return (
                                                        <tr>
                                                            <th>{++index}</th>
                                                            <td>{expense?.name}</td>
                                                            <td>{expense?.expense_date}</td>
                                                            <td className='font-bold'>৳ {expense?.amount}</td>
                                                            <td><button className='btn lg:btn-sm btn-xs btn-warning text-white'>Details</button></td>
                                                        </tr>
                                                    )
                                                })) :
                                                !allData && pettyCash?.length > 0 &&
                                                (pettyCash?.map((expense, index) => {
                                                    return (
                                                        <tr>
                                                            <th>{++index}</th>
                                                            <td>{expense?.name}</td>
                                                            <td>{expense?.expense_date}</td>
                                                            <td className='font-bold'>৳ {expense?.amount}</td>
                                                            <td><button className='btn lg:btn-sm btn-xs btn-warning text-white'>Details</button></td>
                                                        </tr>
                                                    )
                                                }))

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

export default Expense;