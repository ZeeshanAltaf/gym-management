import React from 'react';
import SharedNav from '../Shared/SharedNav';
import logo from '../../../assets/Image/Logo/logo2.png'
import img from '../../../assets/Image/contact/Contact.png'
import { GrInstagram } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoCallSharp } from 'react-icons/io5';
import Form from './Form';

const Contact = () => {
    return (
        <>
            <SharedNav />
            <div>
                <div className='mid-container'>
                    <div className='md:grid grid-cols-2 gap-10 mt-16'>
                        <div className='w-full mb-5 md:mb-0 order-1 md:order-2'>
                            <img className='w-full' src={img} alt="" />
                        </div>
                        <div className='order-2 md:order-1'>
                            <img className='hidden md:block' src={logo} alt="" />
                            <h2 className='font-bold text-3xl py-3 uppercase'>Contact US</h2>

                            <p className='py-3'>Flick is here to help you;
                                Our experts are available to answer any questions you might have. We’ve got the answers.</p>

                            <h2 className='text-xl font-bold uppercase mt-3'>Visit us</h2>
                            <p>Saman Bandi,
                                Muzaffarabad,</p>
                            <p>Azad Kashmir</p>

                            <h2 className='text-xl font-bold uppercase mt-5'>Call us</h2>
                            <p className='flex gap-1 items-center mt-2'><IoLogoWhatsapp className=' ' />88018475-46080</p>
                            <p className='flex gap-1 items-center mt-2'><IoCallSharp className=' ' />88018475-46081</p>

                            <h2 className='text-xl font-bold uppercase mt-5'>Email us</h2>
                            <p className='flex gap-1 items-center mt-2'><MdOutlineEmail className='text-xl ' />info@crossfitassemble.com</p>

                            <h2 className='text-xl font-bold uppercase mt-5'>Follow us</h2>
                            <div className='flex items-center gap-2 mt-2'>
                                <ImFacebook2 /><a target='blank' className=' font-bold ' href="https://www.facebook.com/crossfitassemblebd/">CrossFitassemblebd</a>
                            </div>

                            <div className='flex items-center gap-2 mt-2'>
                                <GrInstagram /><a target='blank' className=' font-bold ' href="https://www.instagram.com/crossfitassemble/">Instagram</a>
                            </div>


                        </div>


                    </div>
                </div>
                <Form />
                <div className='h-[500px] w-full'>
                    <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.16975104848854!2d90.4090285514542!3d23.793124890614084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70eb0eecca3%3A0x57d900b91d331294!2sGreen%20Grandeur!5e0!3m2!1sen!2sbd!4v1661632020017!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className='bg-primary py-10 border-b'>
                <div className="mid-container">
                    <div className="md:flex gap-5 items-start justify-between">
                        <div className='md:w-[15%]'>
                            <img className='w-1/4 mb-5 md:w-2/3' src={logo} alt="" />
                        </div>
                        <div className="grid md:w-[85%] text-white grid-cols-2 md:grid-cols-4 gap-10 ">

                            <div>
                                <h1 className='text-2xl mb-3 font-semibold'>Office</h1>
                                <p className='mb-5 text-sm'>Saman Bandi,
                                    Muzaffarabad,
                                    Azad Kashmir
                                </p>
                                <span className='font-bold text-sm'>
                                    Available Everyday<br />
                                    From 9:00 AM to 6:00 PM</span>

                            </div>
                            <div>
                                <h1 className='text-2xl mb-3 font-semibold'>Quick links</h1>
                                <ul className='text-sm'>
                                    <li className='my-2 cursor-pointer'>Home</li>
                                    <li className='my-2 cursor-pointer'>About us</li>
                                    <li className='my-2 cursor-pointer'>Our Services</li>
                                    <li className='my-2 cursor-pointer'>Our Work</li>
                                    <li className='my-2 cursor-pointer'>Our Blog</li>
                                    <li className='my-2 cursor-pointer'>Contact us</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-2xl mb-3 font-semibold'>Contact Us</h1>
                                <h1 className='mb-2 text-lg'>Call Us</h1>
                                <p className='text-sm'>+ 92 333 9240 643<br />
                                + 92 333 9240 643</p>
                                <h1 className='mt-2 mb-1 text-lg'>Email Us</h1>
                                <p className='text-sm'>shaanssw007@gmail.com</p>
                                <h1 className='mt-2 text-lg'>Fax Us</h1>
                                <div className='flex items-center gap-2 mt-2 text-sm'>
                                    <ImFacebook2 /><a target='blank' className=' ' href="https://www.facebook.com/zeeshanaltaf0">CrossFitassemblebd</a>
                                </div>

                                <div className='flex items-center gap-2 mt-2 text-sm'>
                                    <GrInstagram /><a target='blank' className='' href="https://www.instagram.com/zeeshanaltaf1">Instagram</a>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-2xl mb-3 font-semibold'>Services</h1>
                                <p className='text-sm mb-2'>Digital Management</p>
                                <p className='text-sm'>Media Art Production</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;