import React, { useContext } from 'react';
import SecondTab from './Tab/SecondTab';
import Tabs from './Tab/Tab';
// import Tabs from './Tabs';

const SecondProgramme = () => {
    const [selectedTab, setSelectedTab] = React.useState('personal-training');
    // console.log(selectedTab)
    return (
        <div name='article' className="mid-container main_tabs">
            {/* <h1 className='md:text-4xl text-3xl font-bold text-primary mb-6 '>Our Programms</h1> */}
            {/* Container */}
            <SecondTab
                className=""
                setSelectedTab={setSelectedTab}
                items={[
                    { to: "personal-training", name: "Personal Training" },
                    { to: "semi-personal", name: "Semi-Personal Training" },
                    { to: "individual-coaching", name: "Individual Nutrition Coaching" },
                    { to: "family-coaching", name: "Family/Group Nutrition Coaching" },
                    { to: "followup-coaching", name: "Follow Up Nutrition Coaching" },
                ]}
            />

        </div>
    );
};

export default SecondProgramme;
