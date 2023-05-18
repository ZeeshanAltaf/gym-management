import React from 'react';
import img1 from '../../../../assets/Image/blog/blog1.png'
import img2 from '../../../../assets/Image/blog/blog2.png'
import img3 from '../../../../assets/Image/blog/blog3.png'
import img4 from '../../../../assets/Image/blog/blog4.png'
import img5 from '../../../../assets/Image/blog/blog5.png'
import img6 from '../../../../assets/Image/blog/blog6.png'
import img7 from '../../../../assets/Image/blog/blog7.png'
import img8 from '../../../../assets/Image/blog/blog8.png'
import img9 from '../../../../assets/Image/blog/blog9.png'
import img10 from '../../../../assets/Image/blog/blog10.png'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Category = () => {
    return (
        <div className='my-16'>
            <div className='pb-1 border-b-[1px] border-[#00000018] mb-12'>
                <div>
                    <h2 className='text-xl font-semibold  '>Blog</h2>
                </div>
            </div>

            <div className='grid grid-cols-6 gap-5 border-b-[1px] border-[#00000018] pb-2'>
                <h2 className='font-semibold '>Health</h2>
                <h2 className='font-semibold '>Beauty</h2>
                <h2 className='font-semibold '>Sport</h2>
                <h2 className='font-semibold '>Fitness</h2>
                <h2 className='font-semibold '>Lifestyle</h2>
                <h2 className='font-semibold '>Food</h2>
            </div>


            <div className='md:flex gap-7 mt-5'>
                <div className='md:w-[70%] w-full p-5 grid sm:grid-cols-2 gap-7 rounded-xl border border-[#00000025] md:mb-0 mb-7'>
                    <div>
                        <img className='w-full' src={img1} alt="" />
                        <div className='mt-5'>
                            <p>1 Month Ago</p>
                            <h2 className='font-semibold py-4'>Attak On Titans</h2>
                            <p className='text-xs'>lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>
                        </div>

                        <h2 className='flex items-center text-xs font-bold sm:mt-16 mt-7 cursor-pointer hover:text-primary'>Load more <HiArrowNarrowRight className='ml-2' /></h2>
                    </div>

                    <div className='grid gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] h-24'>
                                <img className='w-full h-full' src={img3} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold '>Love Juice Season:</h2>
                                <h2 className='font-semibold '> Priemere</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] h-24'>
                                <img className='w-full h-full' src={img2} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold'>Naruto Uzumaki:</h2>
                                <h2 className='font-semibold'> Hidden Village</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] h-24'>
                                <img className='w-full h-full' src={img4} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold'>Love Juice Season:</h2>
                                <h2 className='font-semibold'> Priemere</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] h-24'>
                                <img className='w-full h-full' src={img5} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold'>Love Juice Season:</h2>
                                <h2 className='font-semibold'> Priemere</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-[30%] w-full p-5  border border-[#00000025] rounded-xl'>
                    <h1 className='mb-2 font-semibold'>Archive</h1>
                    <div className='grid gap-5'>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] md:h-20 h-28'>
                                <img className='w-full h-full' src={img6} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold text-sm'>Love Juice Season:</h2>
                                <h2 className='font-semibold text-sm'> Priemere</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] md:h-20 h-28'>
                                <img className='w-full h-full' src={img7} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold text-sm'>Naruto Uzumaki:</h2>
                                <h2 className='font-semibold text-sm'> Hidden Village</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] md:h-20 h-28'>
                                <img className='w-full h-full' src={img8} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold text-sm'>Love Juice Season:</h2>
                                <h2 className='font-semibold text-sm'> Priemere</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] md:h-20 h-28'>
                                <img className='w-full h-full' src={img9} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold text-sm'>Love Juice Season:</h2>
                                <h2 className='font-semibold text-sm'> Priemere</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <div className='w-[40%] md:h-20 h-28'>
                                <img className='w-full h-full' src={img10} alt="" />
                            </div>
                            <div className='w-[60%]'>
                                <h2 className='font-semibold text-sm'>Love Juice Season:</h2>
                                <h2 className='font-semibold text-sm'> Priemere</h2>
                                <p className='text-xs mt-2'>21 March 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;