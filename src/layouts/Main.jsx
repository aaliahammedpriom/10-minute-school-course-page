import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';

const Main = () => {
    return (
        <div className='relative'>
            <div className='w-full fixed z-100'>
                <Navbar></Navbar>
            </div>
            <div className='pt-[60px]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;