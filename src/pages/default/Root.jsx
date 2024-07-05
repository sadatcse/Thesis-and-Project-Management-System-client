import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../../components/common/Header';
import Footer from './../../components/common/Footer';
const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='mt-10'> 
            <Outlet></Outlet>
            </div>
           
            <Footer></Footer>
        </div>
    );
};

export default Root;