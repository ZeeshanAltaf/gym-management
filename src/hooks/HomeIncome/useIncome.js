import { useEffect, useState } from "react";
import AuthUser from "../AuthUser/AuthUser";

const useIncome = () => {
    const { token } = AuthUser()
    const [income, setIncome] = useState([]);

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/income`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => setIncome(data.data))
    }, [token]);

    return { income }
};

export default useIncome;