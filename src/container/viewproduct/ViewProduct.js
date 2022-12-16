import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import '../../style/Basic.scss';

function ViewProduct() {
    const admin = sessionStorage.getItem("admin");
    const [products,setProducts] = useState([]);
    const getProduct = async ()=>{
        const response = await fetch("http://localhost:8080/products/"+JSON.parse(admin).fid);
        const json = await response.json();
        setProducts(json);
    };

    useEffect(()=>{
        getProduct();
    },[]);

    
    return (
        <div>
            <h2> Products Listed and their Status</h2>
            <div className='flexible-grid'>
                {products.map(product => (
                        <div className='p-2'>
                            <h6 className='mt-1 monospace text'>
                                Category : {product.fcategory}
                            </h6>
                            <h4 className='product-name text monospace bold'>
                                {product.fname}
                            </h4>
                            <p className='text text-danger'>({product.status === 1?"Listed":"Not Listed"})</p>
                            <div className="product-image">

                            </div>
                            <h6 className='text monospace bold mt-1'>
                                Original Price - <b className='original-price text-danger'>{product.foriginalPrice}</b>
                            </h6>
                            <h6 className='text monospace bold'>
                                Selling Price - <b className='text-success'>{product.fsellingPrice}</b>
                            </h6>
                            <Button className='btn-success me-5 monospace inline'>
                                Edit
                            </Button>
                            <Button className='btn-danger ms-5 monospace inline'>
                                Delete
                            </Button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ViewProduct;