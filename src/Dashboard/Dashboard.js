import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import SharedNav from '../Components/Pages/Shared/SharedNav';
import { FaHouseUser } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { MdPaid } from 'react-icons/md';
import { AiOutlineForm } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { FaMoneyCheck } from 'react-icons/fa';
import { RiOrderPlayLine } from 'react-icons/ri';
import { GoSignOut } from 'react-icons/go';
import { MdManageAccounts } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import AuthUser from '../hooks/AuthUser/AuthUser';
import DashLink from '../hooks/DashboardCustomLink/DashLink';

const Dashboard = () => {
    const { logout, userRole } = AuthUser()
    // console.log(userRole)
    return (
        <>
            <SharedNav />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content pl-1">
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className=" p-4 lg:w-32 w-28  bg-accent font-bold py-10 text-center min-h-[100vh]">

                        {
                            userRole === 'accountant' &&
                            <>
                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/accounts-home'> <FaHouseUser className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/accounts-home'}> Home</DashLink>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/accounts-profile'> <FaUser className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/accounts-profile'}> Profile</DashLink>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/accounts-salary'> <MdPaid className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/accounts-salary'}> Salary</DashLink>
                                    </div>
                                </div>

                                {/* <div className='flex items-center justify-center mb-4'>
                            <div className='hover:text-primary'>
                                <DashLink to='/dashboard/manage-form'> <AiOutlineForm className='mx-auto xl:text-xl' /></DashLink>
                                <DashLink className='' to={'/dashboard/manage-form'}> Form</DashLink>
                            </div>
                        </div> */}

                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/manage-orders'> <RiOrderPlayLine className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/manage-orders'}> Orders</DashLink>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/accounts-income'> <FaMoneyCheck className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/accounts-income'}> Incomes</DashLink>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/accounts-expense'> <HiShoppingCart className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/accounts-expense'}> Expense</DashLink>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center mb-4 cursor-pointer'>
                                    <div className='hover:text-primary' onClick={logout}>
                                        <GoSignOut className='mx-auto xl:text-xl' />
                                        <button> LogOut</button>
                                    </div>
                                </div>
                            </>
                        }

                        {
                            userRole === 'user' && <>
                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/users-home'> <FaHouseUser className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/users-home'}> Home</DashLink>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/user-profile'> <FaUser className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/user-profile'}> Profile</DashLink>
                                    </div>
                                </div>


                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/user-package'> <HiShoppingCart className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/user-package'}> Workout</DashLink>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center mb-4 cursor-pointer'>
                                    <div className='hover:text-primary' onClick={logout}>
                                        <GoSignOut className='mx-auto xl:text-xl' />
                                        <button> LogOut</button>
                                    </div>
                                </div>
                            </>
                        }

                        {
                            userRole === 'trainer' && <>
                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/trainers-home'> <FaHouseUser className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/trainers-home'}> Home</DashLink>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/trainer-profile'> <FaUser className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/trainer-profile'}> Profile</DashLink>
                                    </div>
                                </div>

                                {/* <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/trainer-form'> <AiOutlineForm className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/trainer-form'}> Form</DashLink>
                                    </div>
                                </div> */}

                                {/* <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/trainer-package'> <HiShoppingCart className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/trainer-package'}> Packages</DashLink>
                                    </div>
                                </div> */}

                                {/* <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/trainer-settings'> <AiFillSetting className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/trainer-settings'}> Settings</DashLink>
                                    </div>
                                </div> */}

                                <div className='flex items-center justify-center mb-4'>
                                    <div className='hover:text-primary'>
                                        <DashLink to='/dashboard/students'> <MdManageAccounts className='mx-auto xl:text-xl' /></DashLink>
                                        <DashLink className='' to={'/dashboard/students'}> Students</DashLink>
                                    </div>
                                </div>

                                <div className='flex items-center justify-center mb-4 cursor-pointer'>
                                    <div className='hover:text-primary' onClick={logout}>
                                        <GoSignOut className='mx-auto xl:text-xl' />
                                        <button> LogOut</button>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;