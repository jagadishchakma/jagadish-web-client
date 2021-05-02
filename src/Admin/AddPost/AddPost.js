import React, { useState } from 'react';
import '../Dashboard.css';
import DashHeader from '../DashHeader';
import DashSidebar from '../DashSidebar';
import AddPostContent from './AddPostContent';

const AddPost = () => {
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
            {toggle && <DashSidebar active="addPost"/>}
            {browser < parseInt(1101) ? display && <DashSidebar display={display} active="addPost"/> : null }
            <AddPostContent toggle={toggle}/>
        </div>
    );
};

export default AddPost;