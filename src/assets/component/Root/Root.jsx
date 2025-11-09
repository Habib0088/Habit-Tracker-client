import React from 'react';

import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import Nav from '../Nav/Nav';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;