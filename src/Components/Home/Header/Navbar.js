import React, { useEffect, useState } from 'react';
import logo from '../../../assets/Logo.svg'
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import useNavBg from '../../Hooks/useNavBg';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import CustomLink from '../../../hooks/CustomLink/CustomLink';
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
    const makeSmallNav = useNavBg();
    const { email, logout } = AuthUser()
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="navbar bg-transparent text-white z-50">
            <div className="navbar-start">
                <Link to='/'><img style={{ height: '50px' }} src={logo} alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className=""><Link to='/' className="uppercase hover_effect font-semibold text-sm text-[12px] p-2" href="#">Home</Link></li>

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
                <div className=" dropdown-end ">
                    <label onClick={() => setIsOpen(!isOpen)} tabIndex="0" className="btn btn-ghost lg:hidden pr-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    {
                        isOpen && <ul className="menu menu-compact  absolute mr-[30px] md:mr-[55px] dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-[#dbe5fa] z-50 text-black ">
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

            {/* <div className="drawer lg:hidden drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                </div>
                <div className="drawer-side absolute right-0">
                    <label for="my-drawer-4" className="drawer-overlay"></label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-[#dbe5fa] z-50 text-black ">
                        <li><Link to='/' className="uppercase hover_effect font-bold text-sm" href="#">Home</Link></li>
                        <li><Link to='/about' className="uppercase hover_effect font-bold text-sm" href="#">About</Link></li>
                        <li><Link to='/crossfit' className=" hover_effect font-bold text-sm" href="#">CrossFit</Link></li>
                        <li><Link to='/fitness' className="uppercase hover_effect font-bold text-sm" href="#">Fitness</Link></li>
                        <li><Link to='/trainers' className="uppercase hover_effect font-bold text-sm" href="#">Trainers</Link></li>
                        <li><Link to='/testimonials' className="uppercase hover_effect font-bold text-sm" href="#">Testimonials</Link></li>
                        <li><Link to='/blog' className="uppercase hover_effect font-bold text-sm" href="#">Blog</Link></li>
                        <li><Link to='/shop' className="uppercase hover_effect font-bold text-sm" href="#">Shop</Link></li>
                        <li><Link to='/contact' className="uppercase hover_effect font-bold text-sm" href="#">Contact</Link></li>
                        <li><Link to='/login' className="uppercase hover_effect font-bold text-sm" href="#">Login</Link></li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;