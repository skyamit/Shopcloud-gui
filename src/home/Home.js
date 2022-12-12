import React from 'react';
import { useLocation } from 'react-router-dom';

function Home(props) {
    const admin = useLocation().state;
    console.log(useLocation());
    return (
        <>
            Welcome to home

        </>
    );
}

export default Home;