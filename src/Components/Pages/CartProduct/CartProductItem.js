import React from 'react';
import toast from 'react-hot-toast';
import { ImCancelCircle } from 'react-icons/im';
import AuthUser from '../../../hooks/AuthUser/AuthUser';

const CartProductItem = ({ product, refetch }) => {
    const { token } = AuthUser()

    const handleDelete = (id) => {
        fetch(`https://gym-management97.herokuapp.com/api/product_cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => {
                toast.success('Product deleted successfully')
                refetch()
                console.log(data)
            })
    }

    // update quantity
    // const handleQuantity = (type, id) => {
    //     fetch(`https://gym-management97.herokuapp.com/api/product_cart/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': `Bearer ${token}`
    //         },
    //         body: JSON.stringify({
    //             quantity: type === 'increase' ? product.quantity + 1 : product.quantity - 1
    //         })
    //     }).then(res => res.json())
    //         .then(data => {
    //             refetch()
    //             console.log(data)
    //         })
    // }

    return (
        <div className='my-3 flex justify-between items-center border px-5 py-3 rounded'>
            <div className='sm:flex items-center gap-2 sm:text-start text-center sm:w-[45%] w-[40%]'>
                <img className='w-16 h-16 rounded-full sm:mx-0 mx-auto' src={product?.product?.image} alt="" />
                <h2 className='font-semibold sm:text-[16px] text-sm' >{product?.product?.name}</h2>
            </div>
            <h2 className='sm:w-[20%] w-[20%] text-center '>{product?.quantity
            }</h2>
            {/* <input onClick={()=>handleQuantity(`'increase', {product?.id}`)} type="number" id="quantity" name="quantity" min="1"/> */}


            <div className='sm:w-[20%] w-[40%] flex items-center justify-between gap-2'>
                <h2 className='w-[80%] text-center flex gap-2 justify-center items-center'>৳ {product?.sub_total_price } </h2>
                <span
                    onClick={() => handleDelete(product?.id)}
                    className=' w-[20%] flex sm:justify-center justify-end'> <ImCancelCircle className='text-xl cursor-pointer' /></span>
            </div>
        </div>
    );
};

export default CartProductItem;