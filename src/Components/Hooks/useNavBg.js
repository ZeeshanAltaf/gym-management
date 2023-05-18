import { useEffect, useState } from "react";

const useNavBg = () => {
    const [makeSmallNav, setMakeSmallNav] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setMakeSmallNav(true);
            } else {
                setMakeSmallNav(false);
            }
        })
    })
    return makeSmallNav;
};


export default useNavBg;