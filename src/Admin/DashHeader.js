import React from 'react';

const DashboardHeader = (props) => {
    const {toggleSidebar} = props;
    return (
        <header className="dashboard-header">
            <nav className="dashboard-nav">
                <menu className="dash-menu">
                    <div className="dashboard-brand">
                       <div className="dash-collaborate" onClick={toggleSidebar}>
                            <span className="hr"></span>
                            <span className="hr"></span>
                            <span className="hr"></span>
                       </div>
                       <div className="dash-user">
                           <h6>Jagadish Chakma</h6>
                       </div>
                    </div>
                    <div className="dashboard-user">
                        <button className="btn btn-danger"> Logout</button>
                    </div>
                </menu>
            </nav>
        </header>
    );
};

export default DashboardHeader;