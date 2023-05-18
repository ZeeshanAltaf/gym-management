import { success } from 'daisyui/src/colors';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../../../hooks/AuthUser/AuthUser';

const Products = ({ product }) => {
    const navigate = useNavigate()
    const { token } = AuthUser()
    const goToDetails = useNavigate();
    const handleClick = () => {
        goToDetails(`/product/${product?.id}`);
    };

    // post product to cart
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
                if (data?.success) {
                    toast.success("Product add to cart Successfully");
                } else if (data?.code === 'token_not_valid') {
                    navigate('/login')
                }
                else {
                    toast.error("Product already added to cart");
                }
                console.log(data)
            })
    }


    return (
        <div

            className="card shadow rounded ">
            <figure className="w-full sm:h-48 h-40 overflow-hidden sm:p-3 p-2 rounded">
                <img src={product?.image} alt="Shoes" className="w-full h-full rounded" />
            </figure>
            <div className="card-body items-center text-center px-0 pb-0 sm:pt-3 pt-0">
                <h2 onClick={() => handleClick(product?.id)} className="card-title sm:text-xl text-sm font-semibold cursor-pointer hover:text-primary">{product?.name}</h2>
                <p className='font-bold text-primary flex items-center sm:text-xl text-sm'>৳{product?.discounted_price
                }<span className='text-sm ml-2 text-secondary '> <del>
                    {product?.original_price}
                </del> </span></p>
                <div
                    onClick={() => handleCart(product?.id)}
                    className="bg-[#FBB848] p-3 w-full cursor-pointer">
                    <h1 className='font-bold'>Add to cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Products;