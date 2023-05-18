import React from 'react';

const PersonalTrainingCompo = () => {

    return (
        <div className='mx-auto'>
            <h1 className='text-md my-5'>One on one class to provide individual attention for members
                with specific needs. Pick from our list of certified coaches and hit the ground running.</h1>

            <div className="schedule mb-10 md:flex items-center">
                <div className="schedule_time w-full">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra table_border table-compact w-full">
                            <thead className='table_border rounded-2xl'>
                                <tr >
                                    <th>Packages</th>
                                    <th>8 Classes</th>
                                    <th>12 Classes</th>
                                    <th>16 Classes</th>
                                    <th>20 Classes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover">
                                    <th>Validity</th>
                                    <td>30 days from purchase</td>
                                    <td>60 days from purchase</td>
                                    <td>60 days from purchase</td>
                                    <td>90 days from purchase</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PersonalTrainingCompo;