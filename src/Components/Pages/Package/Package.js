import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/Image/pricing/Fitness tracker-amico.png'
import img3 from '../../../assets/Image/pricing/Workout-amico.png'
import img2 from '../../../assets/Image/pricing/Workout-rafiki.png'
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';

const Package = () => {
    const { token } = AuthUser()
    const navigate = useNavigate();

    // useEffect(() => {
    //     fetch('https://gym-management97.herokuapp.com/api/package_order/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify({
    //             package: packageId
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }, [])

    const { data: packages, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/package_by_type?package_type=1`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }


    // console.log(packages)

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-7 md:mb-16 mb-10'>
            {
                packages?.data?.map((item, index) => {
                    return (
                        <div className="shadow-xl rounded-md">
                            {
                                index === 0 && <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Basic Plan</h1>
                            }
                            {
                                index === 1 && <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Standard Plan</h1>
                            }
                            {
                                index === 2 && <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Premium Plan</h1>
                            }

                            <div className='w-28 mx-auto'>
                                {
                                    index === 0 && <img className='w-full' src={img1} alt="Shoes" />
                                }
                                {
                                    index === 1 && <img className='w-full' src={img2} alt="Shoes" />
                                }
                                {
                                    index === 2 && <img className='w-full' src={img3} alt="Shoes" />
                                }
                            </div>

                            <div className="card-body pt-0">
                                <div className='text-center'>
                                    <h1 className="text-2xl font-bold text-primary mx-auto flex justify-center items-end">৳ {item?.discounted_price?.split('.')[0]}/<span className='text-gray-500 font-normal text-sm'>
                                        {
                                            item?.duration_days === 30 && <h2>30Days</h2>
                                        }
                                        {
                                            item?.duration_days === 90 && <h2>3 Months</h2>
                                        }
                                        {
                                            item?.duration_days === 180 && <h2>6 Months</h2>
                                        }
                                    </span></h1>


                                    <span className='text-sm text-secondary'><del>৳ {item?.original_price
                                    }</del></span>
                                </div>
                                <p className='text-sm text-secondary text-justify'>{item?.description}</p>
                                <h2 className='text-xl font-bold mt-3'>CrossFit</h2>
                                <div className='ml-4 mt-3'>
                                    <li className='text-sm mb-3'>Total Class: {item?.total_class}</li>
                                    <li className='text-sm mb-3'>Total Consultation
                                        : {item?.total_consultation
                                        }</li>
                                    <li className='text-sm mb-3'>Customizable Calendar</li>
                                    <li className='text-sm mb-3'>Healthy Recipes</li>
                                    <li className='text-sm mb-3'>Health and Fitness Articles</li>
                                    <li className='text-sm'>No Credit Card Needed</li>
                                </div>
                                <div
                                    onClick={() => {
                                        navigate(`/payment/${item?.id}`)
                                    }}
                                    className="card-actions justify-center mt-5">
                                    <button className="btn btn-primary w-full">Choose Plan</button>
                                </div>
                            </div>
                        </div>)
                })

            }

















            {/* <div className="shadow-xl rounded-md">
                <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Standard Plan</h1>
                <div className='w-36 mx-auto'>
                    <img className='w-full' src={img2} alt="Shoes" />
                </div>
                <div className="card-body pt-0">
                    <h1 className="card-title text-4xl font-bold text-primary mx-auto"><span className='flex'>10%<span className='text-xl mt-3'>/6Months</span></span></h1>
                    <p className='text-sm text-secondary text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et, vel mattis elit id eget habitant turpis.</p>
                    <h2 className='text-xl font-bold mt-3'>Facilities</h2>
                    <div className='ml-4 mt-3'>
                        <li className='text-sm mb-3'>600 Full-Length Workout Videos</li>
                        <li className='text-sm mb-3'>Customizable Calendar</li>
                        <li className='text-sm mb-3'>Healthy Recipes</li>
                        <li className='text-sm mb-3'>Health and Fitness Articles</li>
                        <li className='text-sm mb-3'>Positive and Supportive Online Community</li>
                        <li className='text-sm'>No Credit Card Needed</li>
                    </div>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-primary w-full">Choose Plan</button>
                    </div>
                </div>
            </div>
            <div className=" shadow-xl rounded-md">
                <h1 className='text-center text-3xl font-bold mt-4 mb-2'>Premium Plan</h1>
                <div className='w-36 mx-auto'>
                    <img className='w-full' src={img3} alt="Shoes" />
                </div>
                <div className="card-body pt-0">
                    <h1 className="card-title text-4xl font-bold text-primary mx-auto"><span className='flex'>15%<span className='text-xl mt-3'>/1Year</span></span></h1>
                    <p className='text-sm text-secondary text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et, vel mattis elit id eget habitant turpis.</p>
                    <h2 className='text-xl font-bold mt-3'>Facilities</h2>
                    <div className='ml-4 mt-3'>
                        <li className='text-sm mb-3'>600 Full-Length Workout Videos</li>
                        <li className='text-sm mb-3'>Customizable Calendar</li>
                        <li className='text-sm mb-3'>Healthy Recipes</li>
                        <li className='text-sm mb-3'>Health and Fitness Articles</li>
                        <li className='text-sm mb-3'>Positive and Supportive Online Community</li>
                        <li className='text-sm'>No Credit Card Needed</li>
                    </div>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-primary w-full">Choose Plan</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Package;