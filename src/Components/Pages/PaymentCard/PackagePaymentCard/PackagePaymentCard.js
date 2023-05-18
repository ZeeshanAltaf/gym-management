import React, { useState } from 'react';
import '../PaymentCard.css'
import bkash from '../../../../assets/Image/payment/bkash.png'
import nagad from '../../../../assets/Image/payment/nagad.png'
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthUser from '../../../../hooks/AuthUser/AuthUser';
// import { useQuery } from 'react-query';
// import Loading from '../../../hooks/Loading/Loading';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import SharedNav from '../../Shared/SharedNav';
import { useEffect } from 'react';

const PackagePaymentCard = () => {
    const { token } = AuthUser();
    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const [openTransaction, setOpenTransaction] = useState(false);
    const [openBkash, setOpenBkash] = useState(false);
    const [openNagad, setOpenNagad] = useState(false);
    const [packages, setPackages] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/packages/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                setPackages(data)
            })
    }, [id, token])

    // console.log(packages)

    // confirm order
    const handleConfirmOrder = (data) => {

        fetch('https://gym-management97.herokuapp.com/api/package_order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                package_id: [id],
                payment_type: (openBkash || openNagad) ? 'mobile_banking' : 'cash_on_delivery',
                transaction_number: data.transaction || ""
            })
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                if (!data.success) {
                    if (data.error === 'Something went wrong') {
                        toast.error('User with this email already exists.')
                        return;
                    } else if (data.error) {
                        toast.error('Phone number should be start with +880')
                        return;
                    }
                } else {
                    toast.success('Package Order Successfully')
                    reset();
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    // console.log(packages)
    return (
        <>
            <SharedNav />

            <div className='mid-container min-h-[85vh]'>
                <h2 className='mt-8 text-2xl font-semibold mb-5'>Payment</h2>

                <h1 className='text-xl mb-5'>Choose payment method below</h1>
                <div className='md:flex gap-5 mb-20'>
                    <div className='md:w-[30%] md:order-2 order-1 mb-5'>
                        <div className=' shadow p-5'>
                            <h2 className='text-xl font-semibold mb-3'>Order Summery</h2>
                            <div className='flex justify-between '>
                                <h2 className='font-semibold'>Total Amount</h2>
                                <h2>৳ {packages?.discounted_price
                                }</h2>
                            </div>
                        </div>
                    </div>


                    <div className='md:w-[70%] shadow p-5  md:order-1 order-2'>
                        <div className='grid grid-cols-3 lg:gap-7 gap-3'>
                            <div
                                onClick={() => {
                                    setOpenBkash(false)
                                    setOpenNagad(false)
                                    setOpenTransaction(false)
                                }}
                                className='bg-accent rounded-xl border flex justify-center items-center cursor-pointer py-3 px-1'>
                                <div>
                                    <img className='mx-auto lg:w-12 w-7' src="https://laz-img-cdn.alicdn.com/tfs/TB1utb_r8jTBKNjSZFwXXcG4XXa-80-80.png" alt="" />
                                    <h1 className=' text-gray-500 text-center lg:text-[14px]text-sm'>Cash On Delivery</h1>
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    setOpenTransaction(true)
                                    setOpenBkash(true)
                                    setOpenNagad(false)
                                }}
                                className='bg-accent rounded-xl border flex justify-center items-center  cursor-pointer py-3  px-1'>
                                <img className='lg:w-32 w-20' src={bkash} alt="" />
                            </div>
                            <div
                                onClick={() => {
                                    setOpenTransaction(true)
                                    setOpenBkash(false)
                                    setOpenNagad(true)
                                }}
                                className='bg-accent rounded-xl border flex justify-center items-center  cursor-pointer py-3  px-1'>
                                <img className='lg:w-32 w-20' src={nagad} alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='font-semibold mt-5 text-xl'>Billing Info</h2>
                            <form
                                onSubmit={handleSubmit(handleConfirmOrder)}
                                className=' mt-5'>
                                <div className='grid md:grid-cols-2 md:gap-x-5'>
                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Name</label>
                                        <input className='py-2 px-3 bg-[#F2F2F2] rounded-md focus:outline-0' type="name" name="name" id="" placeholder='Your Name'
                                            {...register("name", {
                                                required: 'Name is required',
                                                pattern: {
                                                    value: 3,
                                                    message: 'Name must be at least 3 characters'
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('name')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.name?.message}</small>
                                    </div>
                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Address</label>
                                        <input className='py-2 px-3 bg-[#F2F2F2] rounded-md focus:outline-0' type="text" name="address" id="" placeholder='Your Address'
                                            {...register("address", {
                                                required: 'Address is required',
                                                pattern: {
                                                    value: 3,
                                                    message: 'Address must be at least 3 characters'
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('address')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.address?.message}</small>
                                    </div>

                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>Email</label>
                                        <input className='py-2 px-3 bg-[#F2F2F2] rounded-md focus:outline-0' type="email" name="email" id="" placeholder='Your Email'
                                            {...register("email", {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Please enter a valid Email"
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('email')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.email?.message}</small>
                                    </div>

                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2'>City</label>
                                        <input className='py-2 px-3 bg-[#F2F2F2] rounded-md focus:outline-0' type="text" name="city" id="" placeholder='City'
                                            {...register("city", {
                                                required: 'City is required',
                                                pattern: {
                                                    value: 3,
                                                    message: 'City Name must be at least 3 characters'
                                                }
                                            })}
                                            onKeyUp={(e) => {
                                                trigger('city')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] text-xs ml-2 font-medium my-2'>{errors?.city?.message}</small>
                                    </div>

                                    <div className="flex  w-full mx-auto flex-col">
                                        <label className='text-[#747474] text-sm font-medium ml-1 mb-2' >Phone</label>
                                        <input className='py-2 px-3 rounded-md bg-[#F2F2F2] focus:outline-0' type="text" name="phone" id="" placeholder='Enter Phone Number'
                                            {...register('phone', {
                                                required: 'Phone is required',
                                                minLength: {
                                                    value: 11,
                                                    message: 'Minimum 11 character required'
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger('phone')
                                            }}
                                        />
                                        <small className='text-[#FF4B2B] ml-2 text-xs font-medium my-2'>{errors?.phone?.message}</small>
                                    </div>

                                </div>

                                {
                                    openTransaction && (
                                        <div>
                                            <h2 className='font-semibold mt-5 text-xl'>Payment Info</h2>

                                            <div className="flex  w-full mx-auto flex-col mt-3">

                                                <input className='py-2 rounded-md border px-3 focus:outline-0' type="text" name="phone" id="" placeholder={`${openBkash ? 'Enter Bkash Account Number' : 'Enter Nagad Account Number'}`}
                                                    {...register('banking', {
                                                        required: 'Account is required',
                                                        minLength: {
                                                            value: 11,
                                                            message: 'Minimum 11 character required'
                                                        }
                                                    })}
                                                    onKeyUp={() => {
                                                        trigger('banking')
                                                    }}
                                                />
                                                <small className='text-[#FF4B2B] ml-2 text-xs font-medium my-2'>{errors?.banking?.message}</small>
                                            </div>

                                            <div className="flex  w-full mx-auto flex-col mt-3">

                                                <input className='py-2 px-3 rounded-md border focus:outline-0' type="text" name="phone" id="" placeholder='Enter TxnID'
                                                    {...register('transaction', {
                                                        required: 'TxnID is required',
                                                    })}
                                                    onKeyUp={() => {
                                                        trigger('transaction')
                                                    }}
                                                />
                                                <small className='text-[#FF4B2B] ml-2 text-xs font-medium my-2'>{errors?.transaction?.message}</small>
                                            </div>


                                        </div>
                                    )
                                }
                                <div className='mt-10 sm:flex items-center  gap-5'>
                                    <div className='hidden sm:block'>
                                        <Link to='/shop'><button
                                            className='btn btn-accent' type="submit">Back to shop</button></Link>
                                    </div>
                                    <div>
                                        <button
                                            className='btn btn-primary w-full' type="submit">Confirm Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default PackagePaymentCard;