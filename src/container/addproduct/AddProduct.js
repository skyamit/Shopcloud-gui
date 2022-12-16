import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../../style/Basic.scss';

function AddProduct() {
    const admin = sessionStorage.getItem("admin");
    const [name,setName] = useState();
    const [category,setCategory] = useState("Men's Fashion");
    const [desc,setDesc] = useState();
    const [count,setCount] = useState();
    const [sellingPrice, setSellingPrice] = useState();
    const [originalPrice, setOriginalPrice] = useState();
    const fcreatedTime = Date.now();

    const onSubmit = async (e) => {
        e.preventDefault();
        add();
      };
      
    const add = async ()=>{
        const product = {
            "fadminId":JSON.parse(admin).fid,
            "fname":name,
            "fcategory":category,
            "fdescription":desc,
            "favailableCount":count,
            "fpercentageOff":0,
            "foriginalPrice":originalPrice,
            "fsellingPrice":sellingPrice,
            "fstatus":0,
            "fcreatedAt":fcreatedTime,
            "fupdatedAt":fcreatedTime
        }
        console.log(product);

        const response = await fetch("http://localhost:8080/products/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        });

        if(response.status === 201){
            document.getElementById("message").innerHTML= "Product added successfully!!";
        }
        else{
            document.getElementById("message").innerHTML= "Please try again..";
        }
    };
    return (
        <div className='form' id='background'>
            <div className=' form m-5 blur-black  p-5'>
                <h1 className='text black monospace'><b>Product Details</b></h1>

                <Form  onSubmit={onSubmit}>
                    <FormGroup floating>
                        <Input id="name" name="name" placeholder="Name" type="text" onChange={(event)=>{setName(event.target.value)}} required/>
                        <Label htmlFor="name">Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input type="select"
                        name="category"
                        id="category" onChange = {(event)=>{setCategory(event.target.value)}} required>
                        <option>Men's Fashion</option>
                        <option>Women' Fashion</option>
                        <option>Beauty</option>
                        <option>Tv</option>
                        <option>Mobile</option>
                        <option>Toy</option>
                        <option>Books</option>
                        <option>Safety</option>
                        </Input>
                        <Label htmlFor="category">Category</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="desc" name="desc" placeholder="Description" type="textarea" rows='5' onChange={(event)=>{setDesc(event.target.value)}} required/>
                        <Label htmlFor="desc">Product Description</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="count" name="count" placeholder="Avaiable count" type="number" min='0' max='10000' onChange={(event)=>{setCount(event.target.value)}} required/>
                        <Label htmlFor="count">Available Count</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="selling-price" name="selling-price" placeholder="Selling Price" type="number"  min='0' max='100000' onChange={(event)=>{setSellingPrice(event.target.value)}}  required/>
                        <Label htmlFor="selling-pricec">Selling price</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input id="original-price" name="p" placeholder="Original price" type="number" min='0' max='100000' onChange={(event)=>{setOriginalPrice(event.target.value)}}  required/>
                        <Label htmlFor="original-price">Original price</Label>
                    </FormGroup>
                    <FormGroup>
                        <Button className="btn-success" type="submit">Add Product</Button>
                    </FormGroup>
                </Form>
                <h3 className="text-success white monospace" id="message"> </h3>
            </div>            
        </div>
    );
}

export default AddProduct;