import React from 'react';
import img from '../../../assets/Image/AboutUs/abb-bg.png'
import SharedNav from '../Shared/SharedNav';
import '../../Home/About/About.css'

const AboutUs = () => {
    return (
        <div>
            <SharedNav />
            <img className="banner -mt-[68px] z-0 w-full flex items-center justify-center flex-col" src={img} alt="" />
            <div>
                <div className='mid-container'>
                    <h1 className='text-center text-5xl font-bold mb-16 mt-10 mx-auto'>Let's know about our CrossFit Assemble</h1>

                    <p className='text-center text-secondary mx-auto text-justify'>CrossFit is a Strength & Conditioning Program
                        that’s based on functional movements. The
                        workouts are programmed in combination of
                        weightlifting, gymnastics and mono structural
                        metabolic conditioning. The intensity is high and
                        workouts are different everyday.</p>

                    <div className='border-l-[3px] border-warning mt-20 py-3'>
                        <div className='ml-3'>
                            <h1 className='text-2xl font-bold mb-5'><span className='border-b-[3px] border-warning'>Why Us</span> </h1>
                            <p className='text-justify'>We are the first CrossFit affiliated box in
                                Muzaffarabad. We offer an all-around guidance to
                                maintain a healthy lifestyle which encompasses
                                physical training, nutrition coaching, stress
                                management, sleep and support system.</p>
                        </div>
                    </div>

                    <div className='border-r-[3px] border-indigo-400 mt-20 py-3'>
                        <div className='mr-3'>
                            <h1 className='text-2xl font-bold mb-5  text-end'><span className='border-b-[3px] border-indigo-400'>Mission &  Vision</span> </h1>
                            <p className='text-justify '>We want to forge a
                                community through
                                elite functional fitness
                                that drives people to
                                be fit and live a healthy
                                life.We envision to be a hub of
                                health & fitness; a place
                                people can rely on to reach
                                their goals and a platform
                                where they can share their
                                experiences that will
                                enlighten the path for
                                others.</p>
                        </div>
                    </div>
                    <div className='border-l-[3px] border-warning mt-20 py-3 mb-24'>
                        <div className='ml-3'>
                            <h1 className='text-2xl font-bold mb-5'><span className='border-b-[3px] border-warning'>Core Values</span> </h1>
                            <p className='text-justify'>
                                <h2 className='font-semibold  mt-2 text-[18px]'>Cooperation</h2>
                                <p>Cooperation
                                    We have created a synergy by
                                    bridging between coaches
                                    and clients to reach individual
                                    and collective goals.</p>
                            </p>
                            <h2 className='font-semibold mt-3 text-xl text-[18px]' >Growth</h2>
                            <p>Growth
                                Experience makes one grow.
                                Our premium lifestyle
                                coaching is designed to
                                navigate your journey towards
                                personal development.
                            </p>
                            <h2 className='font-semibold mt-3 text-xl text-[18px]' >Effectiveness</h2>
                            <p>Effectiveness
                                The results do the talking so
                                we can focus on coaching.
                            </p>

                            <h2 className='font-semibold mt-3 text-xl text-[18px]' >Effectiveness</h2>
                            <p>Effectiveness
                                The results do the talking so
                                we can focus on coaching.
                            </p>
                            <h2 className='font-semibold mt-3 text-xl text-[18px]' >Community</h2>
                            <p>It's at the heart of what we
                                do. An energetic group with
                                similar goals makes the
                                journey worthwhile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default AboutUs;