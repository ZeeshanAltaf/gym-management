import React, { useContext } from 'react';
import Tabs from './Tab/Tab';
// import Tabs from './Tabs';

const Programme = () => {
    const [selectedTab, setSelectedTab] = React.useState('1all');
    // console.log(selectedTab)
    return (
        <div name='article' className="mid-container main_tabs mt-5">
            <h1 className='md:text-4xl text-3xl font-bold text-primary mb-6 '>Our Programmes</h1>
            {/* Container */}
            <Tabs
                className=""
                setSelectedTab={setSelectedTab}
                items={[
                    { to: "on-ramp", name: "On Ramp" },
                    { to: "assemble", name: "Assemble" },
                    { to: "legion", name: "Legion" },
                    { to: "skill-session", name: "Skill Session" },
                    { to: "body-comp", name: "Body Comp Analyzer" },
                ]}
            />

        </div>
    );
};

export default Programme;
