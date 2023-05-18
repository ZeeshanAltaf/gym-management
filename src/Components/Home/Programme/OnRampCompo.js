import React from 'react';

const OnRampCompo = () => {
    return (
        <div className='mx-auto'>
            <h1 className='text-md my-5'>For those looking to ease their way into CrossFit, we offer an On Ramp Program. This program is designed to ramp up your fitness and give you more exposure to the movements involved in CrossFit before CrossFit general classes. This is a four classes package.</h1>



            <div className="schedule  mb-10 md:flex items-center">
                <div className="schedule_time w-full">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra table_border table-compact w-full">
                            <thead className='table_border rounded-2xl'>
                                <tr >
                                    <th>Validity</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover">
                                    <td>60 days from purchase</td>
                                    <td>For CrossFit/Legion</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h1 className='font-semibold mt-2'>Classes: Max 20 classes per month</h1>
                </div>
            </div>

        </div>
    );
};

export default OnRampCompo;