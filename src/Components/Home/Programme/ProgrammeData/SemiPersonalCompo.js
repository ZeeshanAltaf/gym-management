import React from 'react';

const SemiPersonalCompo = () => {

    return (
        <div className='mx-auto mb-10'>
            <h1 className='text-md my-5'>Group Personal training at its best. Suitable for spouse, family members, friends, and groups. Basically, for people with similar goals. Personal Training in groups helps with  accountability and creates a competitive environment</h1>



            <div className="schedule md:flex items-center">
                <div className="schedule_time w-full">
                    <div className="overflow-x-auto">
                        <table className="table table_border table-compact w-full">
                            <thead className='table_border rounded-2xl'>
                                <tr className="text-center" >
                                    <th>CrossFit</th>
                                    <th>PT Certified/Other</th>
                                    <th>Uncertified</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="schedule_time w-full">
                                            <div className="overflow-x-auto">
                                                <table className="table table_border table-compact w-full">
                                                    <thead className='table_border rounded-2xl'>
                                                        <tr >
                                                            <th className='nested_table_header'>Format Type</th>
                                                            <th className='nested_table_header'>Discounted Cost</th>
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
                                    </td>
                                    <td>
                                        <div className="schedule_time w-full">
                                            <div className="overflow-x-auto">
                                                <table className="table table_border table-compact w-full">
                                                    <thead className='table_border rounded-2xl'>
                                                        <tr >
                                                            <th className='nested_table_header'>Format Type</th>
                                                            <th className='nested_table_header'>Discounted Cost</th>
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
                                    </td>
                                    <td>
                                        <div className="schedule_time w-full">
                                            <div className="overflow-x-auto">
                                                <table className="table table_border table-compact w-full">
                                                    <thead className='table_border rounded-2xl'>
                                                        <tr >
                                                            <th className='nested_table_header'>Format Type</th>
                                                            <th className='nested_table_header'>Discounted Cost</th>
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


            <div className="schedule mt-5 mb-10 md:flex items-center">
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

export default SemiPersonalCompo;