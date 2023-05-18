import React from 'react';
import img from '../../../assets/Image/Trainers/tbh.png'
import trainer1 from '../../../assets/Image/Trainers/Group 142.png'
import trainer2 from '../../../assets/Image/Trainers/Group 146.png'
import trainer3 from '../../../assets/Image/Trainers/Group 147.png'
import SharedNav from '../Shared/SharedNav';

const Trainers = () => {
    return (
        <>
            <SharedNav />
            <div className='mid-container'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5 mt-16'>
                    <div>
                        <h1 className='lg:text-5xl md:text-4xl text-4xl font-extrabold text-primary uppercase lg:leading-[5rem] md:leading-[4rem]'>Best Professional Trainers for you</h1>
                        <img src={img} alt="" />
                    </div>
                    <div className='lg:pt-8'>
                        <p className='leading-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>
                        <button className='btn btn-primary mt-5'>Get Started</button>
                    </div>
                </div>

                <div className='lg:flex md:flex gap-5 my-24'>
                    <div className='md:w-[40%] md:order-2 mb-10'>
                        <div>
                            <img className='w-full lg:-mt-24 md:-mt-16 rounded-xl ' src={trainer2} alt="" />
                        </div>
                        <h1 className='text-xl font-bold mt-3'>Jonathan Wise</h1>
                        <p className='text-secondary'>Trainer</p>
                    </div>

                    <div className=' md:w-[60%] md:order-1'>
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div>
                                <img className='w-full rounded-xl' src={trainer1} alt="" />
                                <h1 className='text-xl font-bold mt-3'>Samantha William</h1>
                                <p className='text-secondary'>Trainer</p>
                            </div>
                            <div>
                                <img className='w-full lg:mt-40 md:mt-24 mt-10 rounded-xl' src={trainer3} alt="" />
                                <h1 className='text-xl font-bold mt-3'>Karen Summer</h1>
                                <p className='text-secondary'>Trainer</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Trainers;