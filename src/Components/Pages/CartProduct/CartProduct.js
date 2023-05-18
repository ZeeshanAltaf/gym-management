import React, { useEffect, useState } from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import SharedNav from '../Shared/SharedNav';
import { AiOutlineRight } from 'react-icons/ai';

import { Link, useNavigate } from 'react-router-dom';
import CartProductItem from './CartProductItem';
import { useQuery } from 'react-query';
import Loading from '../../../hooks/Loading/Loading';

const CartProduct = () => {
    const { token } = AuthUser()
    const navigate = useNavigate()


    const { data: cartProducts, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://gym-management97.herokuapp.com/api/product_cart/`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }


    const initialValue = 0;
    const totalPrice = cartProducts?.data?.reduce((accumulator, current) => accumulator + current.sub_total_price * current.quantity, initialValue)


    const handleCheckout = () => {
        navigate('/checkout')
    }

    // console.log(totalPrice)

    return (
        <div>
            <SharedNav />

            <div className='mid-container min-h-screen'>
                <div className=" breadcrumbs my-5">
                    <ul className='font-semibold  flex gap-2'>
                        <Link to='/' className='hover:text-primary'>Home</Link>
                        <AiOutlineRight />
                        <Link to='/shop' className='hover:text-primary'>Shop</Link>
                        <AiOutlineRight />
                        <Link to='/shop' className='hover:text-primary'>Cart</Link>
                        <AiOutlineRight />
                    </ul>
                </div>
                <div className=''>
                    <div className='flex justify-between bg-accent px-5 py-4 rounded font-semibold'>
                        <div className='sm:w-[45%] w-[40%]'>
                            <h2>Product</h2>
                        </div>
                        <div className='sm:w-[20%] w-[20%] text-center'>
                            <h2>Quantity</h2>
                        </div>
                        <div className='sm:w-[20%] w-[40%] text-center'>
                            <h2 >Price</h2>
                        </div>
                    </div>
                    {
                        cartProducts?.data?.map(product => <CartProductItem
                            key={product?.id}
                            product={product}
                            refetch={refetch}
                        > </CartProductItem>)
                    }
                </div>

                <div className='mb-24  flex  justify-end px-5'>
                    <div className='sm:w-[40%] w-full grid gap-3'>
                        <div className='flex items-center justify-between pr-5'>
                            <h2 className='font-semibold'>Subtotal</h2>
                            <h2>$ {totalPrice}</h2>
                        </div>
                        <div className='flex items-center justify-between pr-5'>
                            <h2 className='font-semibold'>Tax</h2>
                            <h2>$ 00.00</h2>
                        </div>
                        <div className='flex items-center justify-between pr-5'>
                            <h2 className='font-semibold'>Total</h2>
                            <h2>$ {totalPrice}</h2>
                        </div>

                        <button onClick={handleCheckout} className='btn btn-primary md:mt-8 mt-3' type="">Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;