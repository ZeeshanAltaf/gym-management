import React, { useEffect, useState } from 'react';
import AuthUser from '../../../hooks/AuthUser/AuthUser';
import Loading from '../../../hooks/Loading/Loading';
import OrdersTable from './OrdersTable';
import { BiSearch } from 'react-icons/bi';
import { VscBellDot } from 'react-icons/vsc';
import { useQuery } from 'react-query';
import Package from './Package';
import { HiShoppingCart } from 'react-icons/hi';
import { MdManageSearch } from 'react-icons/md';

const Orders = () => {
    const { token, userRole } = AuthUser()
    // const { packages } = Package()

    const [products, setProducts] = useState([]);
    const [packages, setPackages] = useState([]);
    const [allProductState, setAllProductState] = useState(true);
    // product
    useEffect(() => {
        const url = "https://gym-management97.herokuapp.com/api/product_orders";

        fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setProducts(data.data));
    }, [token, allProductState]);




    useEffect(() => {
        const url = "https://gym-management97.herokuapp.com/api/package_order";

        fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.data, 'packages');
                setPackages(data.data)
            });
    }, [token]);

    const handleProduct = () => {
        setAllProductState(true);


    }
    const handlePackage = () => {
        setAllProductState(false);

    }

    console.log(products)

    return (
        <div className='p-5 mt-4'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>Hello, Accounts!</h2>
                <div className='flex items-center gap-3'>
                    <p className='text-sm font-bold text-secondary'>12 Apr 2022, Tuesday</p>
                    <div className='bg-accent px-3 py-2 rounded cursor-pointer'>
                        <BiSearch className='text-xl ' />
                    </div>
                    <div className='bg-info px-3 py-2 rounded cursor-pointer'>
                        <VscBellDot className='text-xl' />
                    </div>
                </div>
            </div>

            <div className='bg-accent p-5 border rounded mt-8'>
                <div className='flex gap-2 items-center'>
                    <div className=' bg-warning p-2 rounded-full'>
                        <HiShoppingCart className='text-2xl text-white' />
                    </div>
                    <div>
                        <h1 className='text-sm font-bold'>ORDERS</h1>
                        <h1 className='text-sm font-bold'>{(products?.length)}</h1>
                    </div>
                </div>
            </div>

            <div className='mt-7 border-b-[1px] pb-3 mb-8 sm:flex justify-between items-center'>
                <h2 className='font-semibold sm:mb-0 mb-3'>Order List</h2>
                {/* <div className='flex gap-2 items-center font-bold text-sm  bg-accent p-2 rounded border cursor-pointer'>
                    <MdManageSearch className='text-xl mb-1' />
                    <h1>Filter Order</h1>
                </div> */}
                <div className="data_field flex  md:justify-end">
                    <button
                        onClick={handleProduct}
                        className='btn btn-sm btn-primary rounded-md mr-2'>All</button>
                    <button className='btn btn-sm btn-primary rounded-md mr-2'>Products</button>
                    <button
                        onClick={handlePackage}
                        className='btn btn-sm btn-primary rounded-md'>Packages</button>
                </div>
            </div>
            <div className='mb-5'>
                <div className="overflow-x-auto ">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr className='bg-accent'>
                                <th className='bg-accent'>#</th>
                                <th className='bg-accent'>Menu</th>
                                <th className='bg-accent'>Date</th>
                                <th className='bg-accent'>Amount</th>
                                <th className='bg-accent'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProductState ? (
                                    products?.map((product, index) => <OrdersTable
                                        key={index}
                                        product={product}
                                        index={index}
                                    ></OrdersTable>)
                                ) : (
                                    packages?.map((product, index) =>
                                        <tr key={index} >
                                            <th>{product?.id}</th>
                                            <td>{product?.package?.feature[0]?.name}</td>
                                            <td>{product?.order_date}</td>
                                            <td className='font-bold'>৳ {product?.package?.discounted_price}</td>
                                            {
                                                product?.status === 'Complete' ? <td><button className='btn btn-xs btn-success'>{product?.status}</button></td>
                                                    :
                                                    <td><button className='btn btn-xs btn-primary'>{product?.status}</button></td>
                                            }
                                        </tr>

                                    )
                                )
                            }
                            {/* {
                                packages?.map((product, index) => <OrdersTable
                                    key={product?.id}
                                    product={product}
                                    index={index}
                                ></OrdersTable>)
                            } */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Orders;