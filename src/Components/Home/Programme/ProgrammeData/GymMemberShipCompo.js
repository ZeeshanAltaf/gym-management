import React from 'react';

const GymMemberShipCompo = () => {
    return (
        <div className='mx-auto lg:mb-20 md:mb-16 sm:mb-10 mb-10'>
            <h1 className='text-md mt-5 mb-3'>This package enables gym access only. If you are confident that
                you have a solid plan of action and have a will power strong
                enough to keep yourself accountable towards your goal, this is
                for you.</h1>

            <div className="schedule mb-10 md:flex items-center">
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
                                    <td></td>
                                    <td>Save 5%</td>
                                    <td>Save 10%</td>
                                    <td>Save 15%</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GymMemberShipCompo;