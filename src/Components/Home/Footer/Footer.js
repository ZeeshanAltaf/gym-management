import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-primary'>
            <footer className="mid-container items-center p-4 text-neutral-content">
                <div className='sm:flex sm:justify-between'>
                    <div className="flex gap-5 py-2 text-white justify-center">
                        <a href="https://www.facebook.com/zeeshanaltaf0"><FaFacebook /></a>
                        <a href="https://www.instagram.com/zeeshanaltaf1"><AiOutlineInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><BsYoutube /></a>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-sm'><sup className='text-[#ffefba]'>Developed BY -</sup> <span className='font-bold text-white'>Zeeshan Altaf</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;