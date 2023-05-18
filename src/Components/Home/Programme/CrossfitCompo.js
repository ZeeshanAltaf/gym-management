import React from 'react';

const CrossfitCompo = () => {

    return (
        <div className='mx-auto'>
            <h1 className='text-md my-5'>CrossFit group classes are offered throughout the day. You can participate in upto twenty classes a month. Duration of the class is an hour. Every part of the class is coach led.</h1>

            <div className="schedule lg:mb-20 md:mb-16 sm:mb-10 mb-10 md:flex items-center">
                <div className="schedule_time w-full">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra table_border table-compact w-full">
                            <thead className='table_border rounded-2xl'>
                                <tr >
                                    <th>1 month</th>
                                    <th>3 months</th>
                                    <th>6 months</th>
                                    <th>12 months</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover">
                                    <td>Omit Price</td>
                                    <td>Omit Price</td>
                                    <td>Omit Price</td>
                                    <td>Omit Price</td>
                                </tr>
                                <tr className="hover">
                                    <td></td>
                                    <td>Save 5%</td>
                                    <td>Save 10%</td>
                                    <td>Save 15%</td>
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

export default CrossfitCompo;