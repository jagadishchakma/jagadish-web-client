import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const HomeAbout = () => {
    
    return (
        <Fade bottom>
            <section className="content home-about">
                <Container fluid={true}>
                    <h2 className="section-title text-center">About Me <sup className="badge badge-danger">More</sup></h2>
                    <Row>
                        <Col lg={4} md={4} sm={4} xs={12}>
                            <div className="profile">
                                <img src="https://jagadishchakma.github.io/creativity-web-developer-jagadish/images/jagadish2.png" alt="" width="100%" height=""/>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={8} xs={12}>
                            <div className="profile-info">
                                <p>Hi, my name is Jagadish Chakma. I am a dedicated MERN Stack Web Developer. I have tow-plus years of experience .I have experties of HTML, CSS, JavaScript, React.js, Express.js, MongoDB.</p>
                               <p> Intermediate Full Stack Web Application Developer. Searching a programming job to share my skills. 
                                Enjoying develop a web application according marketing strategy rules and added features more user friendly. Also MERN STACK developer gaining knowledge MongoDB, Express.js. React.js, Node.js. Believed that yes will can do something as software engineer. </p>
                                <p>
                                Always learner. Thinking area of web applications that trying to research  how much do gift better experience to users.  </p>
                                <a className="btn btn-outline-primary mt-5 text-danger" href="https://drive.google.com/uc?id=1JFSFYpta2XLAg9ewVZCRLusDjQmHLlri&export=download"><FontAwesomeIcon icon={faDownload}/> Resume</a>
                            </div>
                           
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fade>
    );
};

export default HomeAbout;