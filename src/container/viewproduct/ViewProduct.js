import React, { useEffect, useState } from 'react';
import '../../style/Basic.scss';

function ViewProduct() {
    const admin = sessionStorage.getItem("admin");
    const[product, setProducts] = useState([]);

    const getProduct = async ()=>{
        const {data} = await fetch("http://localhost:8080/products/"+JSON.parse(admin).fid);
        const products = data;
        setProducts(products);
        console.log(products);
    };

    useEffect(()=>{
        getProduct();
    },[]);

    
    return ({

    });
}

export default ViewProduct;