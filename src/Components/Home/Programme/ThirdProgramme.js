import React, { useContext } from 'react';
import ThirdTab from './Tab/ThirdTab';
// import Tabs from './Tabs';

const ThirdProgramme = () => {
    const [selectedTab, setSelectedTab] = React.useState('personalized-food');
    // console.log(selectedTab)
    return (
        <div name='article' className="mid-container main_tabs">
            {/* <h1 className='md:text-4xl text-3xl font-bold text-primary mb-6 '>Our Programms</h1> */}
            {/* Container */}
            <ThirdTab
                className=""
                setSelectedTab={setSelectedTab}
                items={[
                    { to: "personalized-food", name: "Personalized Food Plan for 3 months" },
                    { to: "gym-membership", name: "Gym Membership" },
                    { to: "single-day", name: "Single Day Gym Pass" }
                ]}
            />

        </div>
    );
};

export default ThirdProgramme;
