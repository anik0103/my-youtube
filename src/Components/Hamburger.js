import hamburger from '../assets/hamburger_14264927.png';
import React, { useState } from "react";
import Sidebar from './Sidebar';
import SidebarItems from './SidebarItems';

const Hamburger = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <>
            <div className="hamburger">
                <img src={hamburger} alt="Hamburger Image" width={'25px'}  />
            </div>
            {/* {!isOpen && <Sidebar />}
            {isOpen && <SidebarItems />} */}
        </>
    );
};

export default Hamburger;
