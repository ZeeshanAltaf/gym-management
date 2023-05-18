import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { BsArrowLeftCircle } from 'react-icons/bs';
import img1 from '../../../../assets/Image/blog/short1.png'
import img2 from '../../../../assets/Image/blog/short2.png'
import img3 from '../../../../assets/Image/blog/short3.png'

const ShortReads = () => {
    return (
        <div className='mt-16'>
            <div className='pb-2 flex justify-between border-b-[1px] border-[#00000018] mb-7'>
                <div>
                    <h2 className='text-xl font-semibold  '>Short Reads</h2>
                </div>
                <div className='flex gap-2 text-2xl mt-1'>
                    <BsArrowLeftCircle className='cursor-pointer' />
                    <BsArrowRightCircle className='cursor-pointer' />
                </div>
            </div>

            <div className='grid md:grid-cols-3 gap-7'>
                <div className='flex items-center gap-5'>
                    <div className='w-[40%] md:h-28 h-32'>
                        <img className='w-full h-full' src={img1} alt="" />
                    </div>
                    <div className='w-[60%]'>
                        <h2 className='font-semibold'>Akame Ga Kill:</h2>
                        <h2 className='font-semibold'>Season Finale</h2>
                        <p className='text-xs mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='w-[40%] md:h-28 h-32'>
                        <img className='w-full h-full' src={img2} alt="" />
                    </div>
                    <div className='w-[60%]'>
                        <h2 className='font-semibold'>Naruto Uzumaki:</h2>
                        <h2 className='font-semibold'>Hidden Village</h2>
                        <p className='text-xs mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='w-[40%] md:h-28 h-32'>
                        <img className='w-full h-full' src={img3} alt="" />
                    </div>
                    <div className='w-[60%]'>
                        <h2 className='font-semibold'>Love Juice Season:</h2>
                        <h2 className='font-semibold'> Priemere</h2>
                        <p className='text-xs mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortReads;