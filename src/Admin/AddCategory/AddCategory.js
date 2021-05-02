import React, { useState } from 'react';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import AddCourseContent from './AddCategoryContent';

const AddCategory = () => {
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
            {toggle && <DashSidebar active="addCategory"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="addCategory"/> : null }
            <AddCourseContent toggle={toggle}/>
        </div>
    );
};

export default AddCategory;