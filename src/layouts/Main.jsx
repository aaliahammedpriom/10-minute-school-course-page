import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Sticky Navbar */}
            <div className="w-full fixed z-100 top-0">
                <Navbar />
            </div>

            {/* Main Content with padding top for navbar height */}
            <div className="pt-[60px] flex-grow">
                <Outlet />
            </div>

            {/* Footer always at bottom */}
            <Footer />
        </div>
    );
};

export default Main;
