import React, { useState } from 'react';
import '../include/Basic.css';

function Home(props) {
    const [admin,setAdmin] = useState(JSON.parse(window.sessionStorage.getItem("admin")));

    return (
        <div className='row'>
            <div className='col-12 col-lg-6 col-md-12'>
                {admin.fname}
                <p className='text black'>
                    Details about your product
                </p>
            </div>
            <div className='col-12 col-lg-6 col-md-12'>
                {admin.femail}
                <p className='text black'>
                    List of products
                </p>
            </div>
        </div>
    );
}

export default Home;