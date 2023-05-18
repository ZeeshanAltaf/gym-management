import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { TbCurrencyTaka } from 'react-icons/tb';
import AccountsTable from './AccountsTable';
import { BsPlusLg } from 'react-icons/bs';
import { useQuery } from 'react-query';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import IncomeModal from './IncomeModal';
import ExpenseModal from './ExpenseModal';
import useExpense from '../../../hooks/HomeExpense/useExpense';
import useIncome from '../../../hooks/HomeIncome/useIncome';

const AccountsHome = () => {
    const { token } = AuthUser()
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];
    const date = `${day} ${monthName} ${year}`;
    const [products, setProducts] = useState([]);
    const expense = useExpense();
    const income = useIncome();
    // const [expenseTotal, setExpenseTotal] = useState(0);

    // console.log(expense.expense);


    const expenseTotal = expense.expense?.reduce((total, expense) => {
        return total + Number(expense.amount);
    }, 0)
    const incomeTotal = income.income?.reduce((total, income) => {
        return total + Number(income.amount);
    }, 0)

    const currentBalance = incomeTotal - expenseTotal;



    const { data: orders, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/complete_product_orders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='p-5 mt-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Accounts!</h2>
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

            <div className='mt-7 border-b-[1px] pb-3 mb-5'>
                <h2 className='font-semibold'>Account Overview</h2>
                <p className='text-secondary text-sm'>March 2022</p>
            </div>

            <div className='grid sm:grid-cols-3 bg-[#FEEDD1] sm:py-5 mb-8'>

                <div className='flex items-center justify-center sm:border-r-2 sm:border-b-0 border-b-2 border-white'>
                    <div className='sm:py-8 pt-5 pb-2'>
                        <h1 className='font-bold text-xl text-center'>Current Balance</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl  font-semibold mr-4'><TbCurrencyTaka />{currentBalance}</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center sm:border-r-2 sm:border-b-0 border-b-2 border-white relative'>
                    <ExpenseModal refetch={refetch} />

                    <div className='text-primary sm:py-8 pt-5  pb-2'>
                        <h1 className='font-bold text-xl text-center'>Total Expense</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl font-semibold mr-4'><TbCurrencyTaka />{expenseTotal}</h2>
                    </div>
                </div>

                <div className='flex items-center justify-center relative'>
                    <IncomeModal refetch={refetch} />
                    <div className='text-success sm:py-8 pt-5 pb-4'>
                        <h1 className='font-bold text-xl text-center'>Total Income</h1>
                        <h2 className='flex items-center justify-center sm:text-3xl text-2xl font-semibold mr-4'><TbCurrencyTaka />{incomeTotal}</h2>
                    </div>
                </div>
            </div>

            <div className='mb-8 '>
                03 Mar 2022, Thursday
            </div>

            <AccountsTable orders={orders.data} />
        </div>
    );
};

export default AccountsHome;