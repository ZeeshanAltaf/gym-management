import React from 'react';
import productImg from '../../../assets/Image/HomeShop/single-p-img-removebg-preview.png'
import Product from './Product';
import { TbCurrencyDollar } from 'react-icons/tb';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SpecialOffer = () => {
    // const { token } = AuthUser()
    const navigate = useNavigate()

    // const handleCart = (id) => {
    //     fetch('https://gym-management97.herokuapp.com/api/product_cart/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify({
    //             product_id: id
    //         })
    //     }).then(res => res.json())
    //         .then(data => {
    //             if (data?.success) {
    //                 toast.success("Product add to cart Successfully");
    //             } else {
    //                 toast.error("Product already added to cart");
    //             }
    //             console.log(data)
    //         })
    // }
    return (
        <div className='mid-container'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary mb-8 mt-12'>Special Offers</h1>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 pb-20'>
                <div >
                    <button className='btn btn-sm px-8 btn-primary text-white mb-5' type="">SALE</button>
                    <img className='mx-auto' src={productImg} alt="" />
                    <h2 className='text-3xl font-semibold my-5 md:text-start text-center'>Product Name</h2>
                    <p className='text-secondary text-justify'>
                        Proper nutrition is imperative to maximize athletic performance. Without enough carbohydrates, proteins, and fats, athletes may feel sluggish and fatigued during a workout or ravenously hungry. Athletes may also need to focus on specific vitamins and minerals for fitness performance, such as iron, vitamin D, and zinc.</p>

                    <div className='flex justify-between my-10'>
                        <h1 className='text-3xl font-extrabold flex'><TbCurrencyDollar /> 599</h1>
                        <button
                            onClick={() => navigate('/shop')}
                            className='btn bg-black rounded-full px-6 text-white font-bold hover:btn-primary' type="">ADD TO CART</button>
                    </div>
                </div>
                <div>
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;