import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <div>
                <h4>JAGADISH CHAKMA</h4>
                <h5>MEARN STACK WEB DEVELOPER</h5>
            </div>
            <div>
                <p>
                Hi, my name is Jagadish Chakma. I am a dedicated MERN Stack Web Developer. 
                I have tow-plus years of experience. 
                I have experties of HTML, CSS, JavaScript, React.js, Express.js, MongoDB.
                </p>
            </div>
            <div>
                <Link to="/contact" className="btn btn-outline-info">Get in Touch</Link>
            </div>
            <div>
                <h4>Education</h4>
            </div>
            <div>
                <hr/>
            </div>
            <div>
                <h5>Bachelor of Business Administration</h5>
                <h5>Subject: Accounting</h5>
                <h5>Institute: Rangamati Govt. College</h5>
            </div>
            <div>
                <h4>Training & Courses</h4>
            </div>
            <div>
                <hr/>
            </div>
            <div>
                <h5><FontAwesomeIcon icon={faArrowAltCircleRight}/> Complete Web Development</h5>
                <h6><i>Programming Hero</i></h6>
            </div>
            <div>
                <h5><FontAwesomeIcon icon={faArrowAltCircleRight}/> Laravel With Project</h5>
                <h6><i>Rabbil Hassan</i></h6>
            </div>
            <div>
                <h5><FontAwesomeIcon icon={faArrowAltCircleRight}/> Complete Ecommerce With PWA</h5>
                <h6><i>Rabbil Hassan</i></h6>
            </div>
        </div>
    );
};

export default ProfileInfo;