import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';

const AccountsTable = ({ orders }) => {
    // console.log(orders)
    return (
        <div className='mb-5'>
            <div className="overflow-x-auto ">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='bg-accent'>
                            <th className='bg-accent'></th>
                            <th className='bg-accent'>Email</th>
                            <th className='bg-accent'>Date</th>
                            <th className='bg-accent'>Amount</th>
                            <th className='bg-accent'>Payment Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => {
                                return (
                                    <tr>
                                        <th>{++index}</th>
                                        <td>{order?.email}</td>
                                        <td>{order?.order_date}</td>
                                        <td className='font-bold'>৳ {order?.total_price}</td>
                                        <td>{order?.payment_type_value}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AccountsTable;