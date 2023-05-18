import React from 'react';
import img1 from '../../../assets/Image/icon/icon-1.png';
import img2 from '../../../assets/Image/icon/icon-2.png';
import img3 from '../../../assets/Image/icon/icon-3.png';
import { BsFacebook } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
    return (
        <div className='mid-container'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary mb-7'>Contact us</h1>
            <div className='mb-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5'>

                <div className=" rounded-2xl shadow-md p-3">
                    <div className='flex justify-center'>
                        <img src={img1} alt="" />
                    </div>
                    <div className=' pb-5 flex justify-center'>
                        <div className='flex gap-3'>
                            <div className='grid gap-2 mt-1'>
                                <RiCustomerService2Fill className='text-primary' />
                                <BsFacebook className='text-primary' />
                                <GrInstagram className='text-primary' />
                            </div>
                            <div className='grid gap-2'>
                                <h2 className=' font-semibold text-sm'>7:00AM To 10:30PM</h2>
                                <a target='blank' className=' font-bold ' href="https://www.facebook.com/zeeshanaltaf0">Facebook</a>

                                <a target='blank' className=' font-bold ' href="https://www.instagram.com/zeeshanaltaf1">Instagram</a>
                            </div>
                        </div>
                        {/* <span className='flex items-center justify-center  gap-3' ><MdQueryBuilder className='text-primary text-xl' /><h2 className=' font-semibold text-sm'>7:00AM To 10:30PM</h2></span>
                        <span className='flex items-center justify-center gap-3 my-2' ><BsFacebook className='text-primary' /><h2 className=' font-semibold text-sm'>fb.com/CrossFitBoxDHK</h2></span>
                        <span className='flex items-center justify-center gap-3' ><BsGlobe2 className='text-primary' /><h2 className=' font-semibold text-sm'>@CrossFitBoxDHK</h2></span> */}
                    </div>
                </div>
                <div className=" rounded-2xl shadow-md p-3 ">
                    <div className='flex justify-center'>
                        <img src={img2} alt="" />
                    </div>
                    <div className=''>
                        <span className='flex items-center justify-center  gap-3 my-2' ><RiWhatsappFill className='text-primary' /><h2 className=' font-semibold text-sm'>+ 92 333 9240 643</h2></span>
                        <span className='flex items-center justify-center gap-3 my-2' ><IoCall className='text-primary' /><h2 className=' font-semibold text-sm'>+ 92 333 9240 643</h2></span>
                    </div>
                </div>
                <div className=" rounded-2xl shadow-md p-3 text-center ">
                    <div className='flex justify-center'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='pb-2'>
                        <h2 className='font-semibold text-sm  '>Saman Bandi,</h2>
                        <h2 className='font-semibold text-sm '>Muzaffarabad,</h2>
                        <h2 className='font-semibold text-sm '>Azad Kashmir</h2>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:pb-24 pb-10 md:gap-10' >
                <div className='w-full h-full rounded '>
                <iframe className='w-full h-full rounded-xl border' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.7466188950816!2d73.46231107494417!3d34.38236420022828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de2081d9ccbc3b%3A0x57f1db686019c814!2sRed%20Fort%20Muzaffarabad!5e0!3m2!1sen!2s!4v1684422165664!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    

                </div>

                <div className='mt-5'>
                    <div className="form-control mb-3">
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Email" className="input input-bordered mb-3" />
                    </div>
                    <div className="form-control h-32">
                        <textarea className="textarea textarea-bordered h-full" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;