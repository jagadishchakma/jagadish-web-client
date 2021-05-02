import React, { useState } from 'react';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import ManageCategoryContent from './ManageCategoryContent';

const ManageCategory = () => {
    const [toggle, setToggle] = useState(true);
    const [display, setDisplay] = useState(false);
    const toggleSidebar = () => {
        setToggle(!toggle);
        setDisplay(!display);
        
    }
    
    const browser = window.innerWidth;
    return (
        <div className="dashboard">
            <DashHeader toggleSidebar={toggleSidebar}/>
            {toggle && <DashSidebar active="manageCategory"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="manageCategory"/> : null }
            <ManageCategoryContent toggle={toggle}/>
        </div>
    );
};

export default ManageCategory;