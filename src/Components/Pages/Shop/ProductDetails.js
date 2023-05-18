import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import { AiOutlineRight } from 'react-icons/ai';
import { FiMinusCircle } from 'react-icons/fi';
import { FiPlusCircle } from 'react-icons/fi';
import Loading from '../../../hooks/Loading/Loading';
import SharedNav from '../Shared/SharedNav';
import useAllProducts from './useAllProducts';
import RelatedProducts from './RelatedProducts';

const ProductDetails = () => {
    const { productId } = useParams();
    const { token } = AuthUser()
    const allProduct = useAllProducts()
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch(`https://gym-management97.herokuapp.com/api/products/${productId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                setLoading(false);
                setProduct(data)
            })
    }, [token, productId]);


    const handleQuantity = (type) => {
        if (type === 'decrease') {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
        if (type === 'increase') {
            setQuantity(quantity + 1)
        }
    }

    const handleCart = (id) => {
        fetch('https://gym-management97.herokuapp.com/api/product_cart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                product_id: id
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const relatedProduct = allProduct.allProduct?.filter(products => products?.name?.toLowerCase().includes(product?.name?.toLowerCase()))


    // console.log(product)
    return (
        <>
            <SharedNav />
            <div className='py-5'>
                <div className=" breadcrumbs mid-container">
                    <ul className='font-semibold  flex gap-2'>
                        <Link to='/' className='hover:text-primary'>Home</Link>
                        <AiOutlineRight />
                        <Link to='/shop' className='hover:text-primary'>Shop</Link>
                        <AiOutlineRight />
                        <li to='/product/:productId' className='hover:text-primary cursor-pointer'>Product Details</li>
                    </ul>
                </div>
            </div>

            {
                loading ? <Loading /> :
                    <div className='mid-container'>
                        <div className='md:flex items-center gap-5 bg-white md:shadow'>
                            <div className='md:w-[45%]  p-10 overflow-hidden'>
                                <img className='w-full' src={product?.image} alt="" />
                            </div>
                            <div className='md:w-[55%] md:pt-5 md:pr-5 select-none'>
                                <h1 className='text-2xl font-bold mb-2'>{product?.name}</h1>
                                <p className='text-gray-500 text-sm text-justify'>{product?.description}</p>
                                <p className=' text-2xl mt-3 font-bold text-primary'>৳ {product?.discounted_price
                                }</p>
                                <p className=' text-sm  text-secondary'><del>৳ {product?.original_price}</del></p>

                                <div className='flex items-center gap-3 mt-5'>
                                    <h2 className='text-gray-500 select-none'>Quantity: </h2>
                                    <FiMinusCircle onClick={() => handleQuantity('decrease')} className='text-2xl bg-accent cursor-pointer' />
                                    <span className='select-none'>{quantity}</span>
                                    <FiPlusCircle onClick={() => handleQuantity('increase')} className='text-2xl bg-accent cursor-pointer' />
                                </div>

                                <div className='my-8'>
                                    <button className='btn btn-warning text-white mr-2'>Add To Wishlist</button>
                                    <button
                                        onClick={() => handleCart(product?.id)}
                                        className='btn btn-primary'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }

            <div className='mid-container'>
                <div className='my-10 pb-10'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold mb-5 mt-16'>Related Products</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5'>
                        {
                            relatedProduct?.map(product => <RelatedProducts
                                key={product?.id}
                                product={product}
                            ></RelatedProducts>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;