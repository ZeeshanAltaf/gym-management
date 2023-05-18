import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SharedNav from '../Shared/SharedNav';
import Products from './Products';
import './Shop.css'
import { BsChevronDoubleRight } from 'react-icons/bs';
import Loading from '../../../hooks/Loading/Loading';

const Shop = () => {
    const [pageCount, setPageCount] = useState(0);
    const [productsCount, setProductsCount] = useState(12);
    const [pageNumber, setPageNumber] = useState(1);
    const [allProductsCount, setAllProductsCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // console.log(products)
    const handleSearch = (e) => {

        const searchResult = allProducts?.filter(product => product?.name.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchResult(searchResult);
    }


    useEffect(() => {
        setLoading(true);
        fetch(`https://gym-management97.herokuapp.com/api/products`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setAllProducts(data.data)
                const count = Math.ceil(data.data.length / productsCount)
                setAllProductsCount(data.data.length)
                setPageCount(count)
            })
    }, [productsCount])


    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/products?page=${pageNumber}&limit=${productsCount}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [pageNumber, productsCount])



    let active = pageNumber;
    let button = [];
    for (let number = 1; number <= pageCount; number++) {
        button.push(
            <div key={number}>
                <button onClick={() => setPageNumber(number)} className={` mx-1 btn ${number === active ? ' btn-active' : ''}`}>{number}</button>
            </div>
        );
    }



    // console.log(allProducts)
    return (
        <>
            <SharedNav />
            <div className='bg-img lg:py-32 md:py-28 py-20'>
                <div className=" breadcrumbs mid-container flex justify-center">
                    <ul className='font-semibold  text-white flex items-center justify-center gap-2'>
                        <Link to='/' className='hover:text-primary'><a >Home</a></Link>
                        <BsChevronDoubleRight />
                        <Link to='/shop' className='hover:text-primary'><a >Shop</a></Link>
                    </ul>
                </div>
            </div>



            <div className='mid-container'>
                
                {
                    loading ? <Loading /> :
                        <>
                            <div className='flex justify-end'>
                                <div className="form-control my-8">
                                    <div className="input-group">
                                        <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search…" className="input input-bordered focus:outline-none w-72" />
                                        <button
                                            onClick={handleSearch}
                                            className="btn btn-square">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className='mb-16 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-4'>
                                {
                                    searchResult.length >= 1 ? (
                                        searchResult?.map(product => <Products
                                            key={product._id}
                                            product={product}
                                        ></Products>)
                                    ) : (
                                        products?.data?.map(product => <Products
                                            key={product._id}
                                            product={product}
                                        ></Products>)
                                    )
                                }
                            </div>
                        </>
                }

                <div className="flex btn-group mb-36">
                    <button disabled={pageNumber === 1 && true} onClick={() => setPageNumber(pageNumber - 1)} className="btn outline-0 border-none mr-1">PRE</button>
                    {
                        button.slice(0, 2).map(user => user)
                    }
                    {/* <button>.....</button> */}
                    {
                        pageNumber > 2 &&
                        <div >
                            <button className={` btn ${active ? ' btn-active' : ''}`}>{pageNumber} </button>
                        </div>
                    }

                    <button onClick={() => setPageNumber(pageNumber + 1)} className="btn outline-0 border-none ">NEX</button>

                    <div>
                        <select
                            onChange={(e) => {
                                setPageCount(e.target.value);
                                setProductsCount(e.target.value);
                                setPageNumber(1);
                            }}
                            className="md:text-lg md:ml-2 text-md  md:mt-0 text-center font-bold btn-active text-white px-2 py-2 md:px-2 md:py-[10px] rounded-lg"
                        >
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value={allProductsCount}>All</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;