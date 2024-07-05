import React from 'react';
import { MdManageSearch } from "react-icons/md";

const Banner = () => {
    return (
        <div className="banner-section relative bg-cover bg-center" style={{ height: '750px', backgroundImage: `url('https://i.ibb.co/rF2Q850/Banner-1-1001x436.png')` }}>
            <div className="flex items-center justify-center h-full">
                <div className="banner-content text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Thesis and Project Management System</h1>
                    <p className="text-lg mb-8">Manage and track your academic projects and theses efficiently and effectively.</p>
                    <div className="flex items-center justify-center">
                        <input type="text" placeholder="Search..." className="px-4 py-2 mr-2 rounded-md border border-gray-300 w-96 from-neutral-950" />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                            <MdManageSearch className="mr-2" /> Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
