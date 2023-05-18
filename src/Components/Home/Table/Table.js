import React from 'react';
import SingleTable from './SingleTable';

const Table = () => {
    const morningSchedule = [
        { id: 1, time: '07:00 AM', data: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '', '',] },
        { id: 2, time: '08:00 AM', data: ['', '', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer',] },
        { id: 3, time: '09:00 AM', data: ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '', '',] },
        { id: 4, time: '11:30 AM', data: ['', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '', '',] },
        { id: 5, time: '12:00 PM', data: ['', '', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer',] },
        { id: 6, time: '03:00 PM', data: ['', 'HIIT', '', '', 'HIIT', '', '',] },
        { id: 7, time: '04:00 PM', data: ['', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '',] },
        { id: 8, time: '05:00 PM', data: ['Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer', 'Mobilizer', '', '',] },
        { id: 9, time: '06:00 PM', data: ['', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '',] },
        { id: 10, time: '07:00 PM', data: ['Power Hour', 'Power Hour', 'Mobilizer', 'Mobilizer', 'Power Hour', 'Power Hour', 'Power Hour',] },
        { id: 11, time: '08:00 PM', data: ['', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', '',] }
    ];
    return (
        <div className='mid-container mx-auto'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary mb-6 '>Class Schedule</h1>
            <SingleTable tableData={morningSchedule} />
        </div>
    );
};

export default Table;