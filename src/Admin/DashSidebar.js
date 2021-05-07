import { faGlobe, faList, faPlus, faTachometerAlt, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const DashSidebar = (props) => {
    const {display, active} = props;
    const block = {
        display: 'block',
    }
    return (
        <div className="dash-sidebar ubunto" style={display && block}>
            <ul>
                <li className={active === 'dashboard' ? 'active' : null}><Link to="/admin"><FontAwesomeIcon icon={faTachometerAlt}/> Dashboard</Link></li>
                <li className={active === 'addCategory' ? 'active' : null}><Link to="/admin/addCategory"><FontAwesomeIcon icon={faPlus}/> Add Category</Link></li>
                <li className={active === 'manageCategory' ? 'active' : null}><Link to="/admin/manageCategory"><FontAwesomeIcon icon={faList}/> Manage Category</Link></li>
                <li className={active === 'addPost' ? 'active' : null}><Link to="/admin/addPost"><FontAwesomeIcon icon={faPlus}/> Add Post</Link></li>
                <li className={active === 'managePost' ? 'active' : null}><Link to="/admin/managePost"><FontAwesomeIcon icon={faList}/> Manage Posts</Link></li>
                <li className={active === 'addCategory' ? 'active' : null}><Link to="/admin/addTag"><FontAwesomeIcon icon={faPlus}/> Add Tag</Link></li>
                <li className={active === 'manageCategory' ? 'active' : null}><Link to="/admin/manageTag"><FontAwesomeIcon icon={faList}/> Manage Tag</Link></li>
                <li className={active === 'addAdmin' ? 'active' : null}><Link to="/dashboard/addAdmin"><FontAwesomeIcon icon={faUserShield}/> Add Admin</Link></li>
                <li className={active === 'mainSite' ? 'active' : null}><Link to="/"><FontAwesomeIcon icon={faGlobe}/> Main Site</Link></li>
                <li className={active === 'profile' ? 'active' : null}><Link to="/dashboard/profile"><FontAwesomeIcon icon={faUser}/> Profile</Link></li>
            </ul>
            
        </div>
    );
};

export default DashSidebar;