import React from 'react';
import itemImg from '../../../assets/Special/Rectangle 8.png';
import { FaCartPlus } from 'react-icons/fa';
import { TbCurrencyDollar } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const navigate = useNavigate()

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5 '>
            <div className="card  shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={itemImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold">Product Name</h2>
                    <p className='text-xl font-bold text-primary flex'><TbCurrencyDollar className='text-2xl' />199</p>
                    <div className="card-actions">
                        <button
                            onClick={() => navigate('/shop')}
                            className="btn btn-primary btn-sm mt-2">{FaCartPlus} Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={itemImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold">Product Name</h2>
                    <p className='text-xl font-bold text-primary flex'><TbCurrencyDollar className='text-2xl' />199</p>
                    <div className="card-actions">
                        <button
                            onClick={() => navigate('/shop')}
                            className="btn btn-primary btn-sm mt-2">{FaCartPlus} Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={itemImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold">Product Name</h2>
                    <p className='text-xl font-bold text-primary flex'><TbCurrencyDollar className='text-2xl' />199</p>
                    <div className="card-actions">
                        <button
                            onClick={() => navigate('/shop')}
                            className="btn btn-primary btn-sm mt-2">{FaCartPlus} Add to cart</button>
                    </div>
                </div>
            </div>
            <div className="card shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={itemImg} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold">Product Name</h2>
                    <p className='text-xl font-bold text-primary flex'><TbCurrencyDollar className='text-2xl' />199</p>
                    <div className="card-actions">
                        <button
                            onClick={() => navigate('/shop')}
                            className="btn btn-primary btn-sm mt-2">{FaCartPlus} Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;