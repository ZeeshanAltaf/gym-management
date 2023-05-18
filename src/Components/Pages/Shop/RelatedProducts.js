import React from 'react';
import { useNavigate } from 'react-router-dom';

const RelatedProducts = ({ product }) => {
    const goToDetails = useNavigate();
    const handleClick = () => {
        goToDetails(`/product/${product?.id}`);
    };
    return (
        <div onClick={() => handleClick(product?.id)}
            className="card shadow rounded cursor-pointer">
            <figure className="w-full sm:h-48 h-40 overflow-hidden sm:p-3 p-2 rounded">
                <img src={product?.image} alt="Shoes" className="w-full h-full rounded" />
            </figure>
            <div className="card-body items-center text-center px-0 pb-0 sm:pt-3 pt-0">
                <h2 className="card-title sm:text-xl text-sm font-semibold">{product?.name}</h2>
                <p className='font-bold text-primary flex items-center sm:text-xl text-sm'>৳{product?.discounted_price
                }<span className='text-sm ml-2 text-secondary '> <del>
                    {product?.original_price}
                </del> </span></p>
                <div className="bg-[#FBB848] p-3 w-full cursor-pointer">
                    <h1 className='font-bold'>Add to cart</h1>
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;