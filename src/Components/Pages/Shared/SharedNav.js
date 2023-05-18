import React, { useState } from 'react';
import logo from '../../../assets/Logo.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../Home/Header/Navbar.css'
import { BsBell, BsCart3 } from 'react-icons/bs';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import toast from 'react-hot-toast';
import { MdDashboard } from 'react-icons/md';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import CustomLink from '../../../hooks/CustomLink/CustomLink';

const SharedNav = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { email, logout, userRole } = AuthUser();
    const [isOpen, setIsOpen] = useState(false);

    const handleDashboardAccounts = () => {
        navigate('/dashboard/accounts-home')
    }
    const handleDashboardUsers = () => {
        navigate('/dashboard/users-home')
    }
    const handleDashboardTrainers = () => {
        navigate('/dashboard/trainers-home')
    }

    return (
        <>
            <div className='bg-gray-800 border-b lg:pr-10 md:pr-4'>
                <div className="mid-container">
                    <div className="flex sm:justify-end justify-evenly text-white py-2">

                        <Link className='hover:text-primary' to="#"><BsBell ></BsBell></Link>
                        <Link to="/cart"><BsCart3 className='ml-8 hover:text-primary'></BsCart3></Link>
                        <Link to="#"><HiOutlineUser className='ml-8 hover:text-primary'></HiOutlineUser></Link>
                        {
                            userRole === 'accountant' && <MdOutlineSpaceDashboard onClick={handleDashboardAccounts} className='ml-8 cursor-pointer hover:text-primary'></MdOutlineSpaceDashboard>
                        }
                        {
                            userRole === 'user' && <MdOutlineSpaceDashboard onClick={handleDashboardUsers} className='ml-8 cursor-pointer hover:text-primary'></MdOutlineSpaceDashboard>
                        }
                        {
                            userRole === 'trainer' && <MdOutlineSpaceDashboard onClick={handleDashboardTrainers} className='ml-8 cursor-pointer hover:text-primary'></MdOutlineSpaceDashboard>
                        }
                    </div>
                </div>
            </div>

            <div className='bg-gray-800 z-50 sticky top-0'>
                <div className='mid-container'>
                    <div className="navbar text-white z-50">
                        <div className="navbar-start">
                            <Link to='/'><img style={{ height: '50px' }} src={logo} alt="" /></Link>
                        </div>
                        <div className="navbar-end hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                <li className=""><Link to='/' className="uppercase hover_effect font-semibold text-sm text-[12px] p-2 " href="#">Home</Link></li>
                                <li><CustomLink to='/about' className="uppercase hover_effect font-semibold text-sm text-[12px] p-2" href="#">About</CustomLink></li>

                                {/* <li tabIndex="0">
                        <Link to='/crossFit' className=' hover_effect font-semibold text-sm'>
                            CrossFit
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-[#dbe5fa] text-black">
                            <li><Link to='/fitness' className="uppercase hover_effect font-semibold text-sm" href="#">Fitness</Link></li>
                            <li><Link to='/trainers' className="uppercase hover_effect font-semibold text-sm" href="#">Trainers</Link></li>
                            <li><Link to='/testimonials' className="uppercase hover_effect font-semibold text-sm" href="#">Testimonials</Link></li>
                        </ul>
                    </li> */}

                                <li><CustomLink to='/crossfit' className=" hover_effect font-bold text-sm text-[12px] p-2" href="#">CrossFit</CustomLink></li>
                                <li><CustomLink to='/programs' className="uppercase hover_effect font-bold text-sm text-[12px] p-2" href="#">Programs</CustomLink></li>
                                <li><CustomLink to='/trainers' className="uppercase hover_effect font-bold text-sm text-[12px] p-2" href="#">Trainers</CustomLink></li>
                                <li><CustomLink to='/testimonials' className="uppercase hover_effect font-bold text-sm text-[12px] p-2" href="#">Testimonials</CustomLink></li>

                                <li><CustomLink to='/blog' className="uppercase hover_effect font-semibold text-sm text-[12px] p-2" href="#">Blog</CustomLink></li>
                                <li><CustomLink to='/shop' className="uppercase hover_effect font-semibold text-sm text-[12px] p-2" href="#">Shop</CustomLink></li>
                                <li><CustomLink to='/contact' className="uppercase hover_effect font-semibold text-sm text-[12px] p-2" href="#">Contact</CustomLink></li>
                                {
                                    email ? <li onClick={logout}><CustomLink to='/login' className="uppercase hover_effect font-bold text-sm text-[12px] p-2" href="#">LogOut</CustomLink></li> : <li><CustomLink to='/login' className="uppercase hover_effect font-bold text-sm text-[12px] p-2" href="#">Login</CustomLink></li>
                                }
                            </ul>
                        </div>

                        <div className='navbar-end lg:hidden'>
                            <div className='lg:hidden '>
                                {
                                    pathname.includes("dashboard") && (<label htmlFor="my-drawer-2" tabIndex="1" className="">
                                        <MdDashboard className='text-xl' />
                                    </label>)
                                }
                            </div>
                            <div className="dropdown dropdown-end ">
                                <label onClick={() => setIsOpen(!isOpen)} tabIndex="0" className="btn btn-ghost lg:hidden pr-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                {
                                    isOpen && <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-[#dbe5fa] z-50 text-black ">
                                        <li><Link to='/' className="uppercase hover_effect font-bold text-sm" href="#">Home</Link></li>
                                        <li><Link to='/about' className="uppercase hover_effect font-bold text-sm" href="#">About</Link></li>
                                        <li><Link to='/crossFit' className=" hover_effect font-bold text-sm" href="#">CrossFit</Link></li>
                                        <li><Link to='/programs' className="uppercase hover_effect font-bold text-sm" href="#">Programs</Link></li>
                                        <li><Link to='/trainers' className="uppercase hover_effect font-bold text-sm" href="#">Trainers</Link></li>
                                        <li><Link to='/testimonials' className="uppercase hover_effect font-bold text-sm" href="#">Testimonials</Link></li>
                                        <li><Link to='/blog' className="uppercase hover_effect font-bold text-sm" href="#">Blog</Link></li>
                                        <li><Link to='/shop' className="uppercase hover_effect font-bold text-sm" href="#">Shop</Link></li>
                                        <li><Link to='/contact' className="uppercase hover_effect font-bold text-sm" href="#">Contact</Link></li>
                                        {
                                            email ? <li onClick={logout}><Link to='/login' className="uppercase hover_effect font-bold text-sm" href="#">LogOut</Link></li> : <li><Link to='/login' className="uppercase hover_effect font-bold text-sm" href="#">Login</Link></li>
                                        }
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SharedNav;