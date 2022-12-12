import React from 'react';
import { useLocation } from 'react-router-dom';

function Home(props) {
    const admin = useLocation().state.admin;
    console.log(admin);
    return (
        <>
            Welcome to home

        </>
    );
}

export default Home;