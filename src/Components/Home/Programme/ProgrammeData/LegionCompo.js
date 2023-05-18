import React from 'react';

const LegionCompo = () => {
    return (
        <div className='mx-auto'>
            <h1 className='text-md mt-5 mb-3'>Apart from CrossFit, we offer a diverse range of training options.
                By enrolling in the "Legion" package you unlock all of these
                classes stated below Power Hour- Strength training based on
                Compound lifts. HIIT- High Intensity Interval Training conducted
                by the only HIIT certified coach in the country. Mobilizer- A rehab
                focused program. It's good for everyone but people with injuries
                or disabilities, postural deviations, people just out of surgery may immensely benefit from this class. Martial Arts- Being able to
                defend yourself and your loved ones when necessary is a
                mandatory skill for everyone. So we have a program designed
                with real life scenarios in mind.</h1>
            <h1 className='text-md mb-3'>Class Type: <span className='text-primary'>: Power Hour, HIIT, Mobilizer, Martial Arts</span></h1>



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
                    <h1 className='font-semibold mt-2'>Classes: Max 20 classes per month</h1>
                </div>
            </div>

        </div>
    );
};

export default LegionCompo;