import React, { useContext } from 'react';
import styled from "styled-components";
import OnRampCompo from '../OnRampCompo';
import AssembleCompo from '../AssembleCompo';
import PersonalizedFoodCompo from '../ProgrammeData/PersonalizedFoodCompo';
import GymMemberShipCompo from '../ProgrammeData/GymMemberShipCompo';
import SingleDayCompo from '../ProgrammeData/SingleDayCompo';

const TabsWrapper = styled.div`
  border-bottom: 1px solid #E0E0E0;
  display: grid;
  grid-row: 3px 1fr;
`;

const ActiveLine = styled.div`
  height: 2px;
  width: ${p => `${p.width}px`};
  transform: translateX(${p => `${p.offset}px`});
  background: #000;
  transition: all .5s ease-in-out;
`;

const TabList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
`;
const TabItem = styled.li`
  display: inline-block;
  padding: 8px 15px;
  cursor: pointer;
  &.is-active {
  }
`;

const ThirdTab = props => {
    const activeRef = React.createRef();
    const none = React.createRef();
    const [selected, setSelected] = React.useState("personalized-food");
    const [offset, setOffset] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {

        const activeElement = activeRef.current;
        setOffset(activeElement.offsetLeft);
        setWidth(activeElement.clientWidth);
    }, [selected, activeRef]);


    let section;
    if (selected === "personalized-food") {
        section = <PersonalizedFoodCompo />;
    } else if (selected === "gym-membership") {
        section = <GymMemberShipCompo />
    } else {
        section = <SingleDayCompo />
    }

    return (
        <div className="z-0">
            <TabsWrapper>

                <TabList>
                    {props?.items?.map(item => {
                        return (
                            <TabItem
                                key={item.to}
                                ref={selected === item.to ? activeRef : none}
                                className={`font-bold ${selected === item.to ? "is-active" : ""}`}
                                onClick={() => {
                                    setSelected(item.to)
                                    props.setSelectedTab(item.to)
                                }}
                            >
                                {item.name}
                            </TabItem>
                        );
                    })}

                </TabList>

                <ActiveLine width={width} offset={offset} />
            </TabsWrapper>

            {section}
        </div>
    );
};

export default ThirdTab;


