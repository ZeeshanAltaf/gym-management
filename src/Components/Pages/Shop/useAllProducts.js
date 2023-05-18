import { useEffect, useState } from "react";

const useAllProducts = () => {
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        fetch(`https://gym-management97.herokuapp.com/api/products`)
            .then(res => res.json())
            .then(data => {
                setAllProduct(data.data)
            })
    }, [])
    return { allProduct }
};

export default useAllProducts;