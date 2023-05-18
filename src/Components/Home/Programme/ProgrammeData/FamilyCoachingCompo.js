import React from 'react';

const FamilyCoachingCompo = () => {
    return (
        <div className='mx-auto mb-10'>
            <h1 className='text-md my-5'>Group Nutrition coaching at its best. Program designed for the
                whole family/group because when everyone works on the same
                goal, probability of success increases for every individual due to
                strong support system. We are offering this because, many a
                times people fail to see result due to weak support system.
                Working together instills values for good health into the family.</h1>



            <div className="schedule  mb-10 md:flex items-center">
                <div className="schedule_time w-full">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra table_border table-compact w-full">
                            <thead className='table_border rounded-2xl'>
                                <tr >
                                    <th>Format Type</th>
                                    <th>Discounted Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover">
                                    <td>2.1</td>
                                    <td>Save 15%</td>
                                </tr>
                                <tr className="hover">
                                    <td>3.1</td>
                                    <td>Save 20%</td>
                                </tr>
                                <tr className="hover">
                                    <td>4.1</td>
                                    <td>Save 25%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FamilyCoachingCompo;