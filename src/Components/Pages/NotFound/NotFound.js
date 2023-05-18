import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className=' mid-container'>
            <section class="page_404 h-[100vh] flex items-center">
                <div class="container -mt-32">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center font-bold">404</h1>
                                </div>
                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        Look like you're lost
                                    </h3>
                                    <p>The page you are looking for not available!</p>
                                    <button onClick={()=> navigate(-1)} class="link_404">Go to Previous Page</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;