import { useEffect } from "react";
import { useState } from "react";
import AuthUser from "../AuthUser/AuthUser";

const useExpense = () => {
    const { token } = AuthUser()
    const [expense, setExpense] = useState([]);

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/expense`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
            .then(data => setExpense(data.data))
    }, []);

    return { expense }
};

export default useExpense;