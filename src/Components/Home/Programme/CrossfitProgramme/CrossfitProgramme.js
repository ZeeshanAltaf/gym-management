import React, { useContext } from 'react';
import CrossfitTab from './CrossfitTab';
// import Tabs from './Tabs';

const CrossfitProgramme = () => {
    const [selectedTab, setSelectedTab] = React.useState('1all');
    // console.log(selectedTab)
    return (
        <div name='article' className="mid-container main_tabs mt-5">
            <h1 className='md:text-4xl text-3xl font-bold text-primary mb-6 '>Crossfit Programms</h1>
            {/* Container */}
            <CrossfitTab
                className=""
                setSelectedTab={setSelectedTab}
                items={[
                    { to: "crossfit", name: 'CrossFit' }
                ]}
            />

        </div>
    );
};

export default CrossfitProgramme;
