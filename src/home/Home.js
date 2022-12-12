import React from 'react';
import { useLocation } from 'react-router-dom';

function Home(props) {
    const {state} = useLocation();
    const {admin} = state;
    console.log(admin);
    return (
        <>
            Welcome to home {admin.fid}

        </>
    );
}

export default Home;