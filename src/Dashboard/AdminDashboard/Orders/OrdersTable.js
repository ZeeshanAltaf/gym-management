import React from 'react';

const OrdersTable = ({ product, index }) => {
    // console.log(product)

    return (
        <>
            {
                product?.order_details?.map(items => (
                    <>
                        <tr>
                            <th>{items?.id}</th>
                            <td>{items?.name}</td>
                            <td>{product?.order_date}</td>
                            <td className='font-bold'>৳ {items?.price}</td>
                            {
                                items?.status === 'Complete' ? <td><button className='btn btn-xs btn-success'>{items?.status}</button></td>
                                    :
                                    <td><button className='btn btn-xs btn-primary'>{items?.status}</button></td>
                            }
                        </tr>
                    </>
                ))
            }
        </>
    );
};

export default OrdersTable;