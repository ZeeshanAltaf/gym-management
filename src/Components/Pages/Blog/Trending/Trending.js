import React from 'react';
import img1 from '../../../../assets/Image/blog/Rectangle 33.png'
import img2 from '../../../../assets/Image/blog/trending2.png'
import img3 from '../../../../assets/Image/blog/trending3.png'
import { BsArrowRightCircle } from 'react-icons/bs';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Trending = () => {
    return (
        <div className='mt-16'>
            <div className='pb-2 flex justify-between border-b-[1px] border-[#00000018] mb-5'>
                <div>
                    <h2 className='text-xl font-semibold  '>Now Trending</h2>
                </div>
                <div className='flex gap-2 text-2xl mt-1'>
                    <BsArrowLeftCircle className='cursor-pointer' />
                    <BsArrowRightCircle className='cursor-pointer' />
                </div>
            </div>

            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-7'>
                <div className="p-0">
                    <div>
                        <img className='w-full rounded' src={img1} alt="img" />
                    </div>
                    <div className=" px-0 py-3">
                        <p className='text-xs'>Drama <span className='ml-4'>1 Month Ago</span></p>
                        <h2 className="text-xl font-semibold py-2">Second Chance</h2>
                        <p className='text-sm'>lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>

                        <div className='mt-4 flex items-center justify-between'>
                            <p className='text-xs'>12 Min Read</p>
                            <h1 className='font-bold flex items-center pr-2 cursor-pointer hover:text-primary'>Read Full <span className='ml-1'><HiArrowNarrowRight /></span></h1>
                        </div>
                    </div>
                </div>

                <div >
                    <div>
                        <img className='w-full rounded' src={img2} alt="img" />
                    </div>
                    <div className=" px-0 py-3">
                        <p className='text-xs'>Drama <span className='ml-4'>1 Month Ago</span></p>
                        <h2 className="text-xl font-semibold py-2">Second Chance</h2>
                        <p className='text-sm'>lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>

                        <div className='mt-4 flex items-center justify-between'>
                            <p className='text-xs'>12 Min Read</p>
                            <h1 className='font-bold flex items-center pr-2 cursor-pointer hover:text-primary'>Read Full <span className='ml-1'><HiArrowNarrowRight /></span></h1>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img className='w-full rounded' src={img3} alt="img" />
                    </div>
                    <div className=" px-0 py-3">
                        <p className='text-xs'>Drama <span className='ml-4'>1 Month Ago</span></p>
                        <h2 className="text-xl font-semibold py-2">Second Chance</h2>
                        <p className='text-sm'>lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>

                        <div className='mt-4 flex items-center justify-between'>
                            <p className='text-xs'>12 Min Read</p>
                            <h1 className='font-bold flex items-center pr-2 cursor-pointer hover:text-primary'>Read Full <span className='ml-1'><HiArrowNarrowRight /></span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;