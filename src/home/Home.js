import React, { useState } from 'react';

function Home(props) {
    const [admin,setAdmin] = useState(window.sessionStorage.getItem("admin"));

    return (
        <>
            Welcome to home {admin}

        </>
    );
}

export default Home;