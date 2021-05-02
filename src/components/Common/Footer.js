import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid="true">
                <div className="top-footer">
                    <Row>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <div className="follow-me">
                                <h4>Follow Me</h4>
                                <ul>
                                    <li><a href=""> <i className="linkdin"><FontAwesomeIcon icon={faLinkedin}/></i> Linkdin</a></li>
                                    <li><a href=""><i className="github"><FontAwesomeIcon icon={faGithub}/></i> Github</a></li>
                                    <li><a href=""><i className="twitter"><FontAwesomeIcon icon={faTwitter}/></i> Twitter</a></li>
                                    <li><a href=""><i className="facebook"><FontAwesomeIcon icon={faFacebook}/></i> Facebook</a></li>
                                    <li><a href=""><i className="youtube"><FontAwesomeIcon icon={faYoutube}/></i> YouTube</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <div className="follow-me">
                                <h4>Contact Me</h4>

                                <ul>
                                    <li><i className="location"><FontAwesomeIcon icon={faLocationArrow}/></i> Rangamati Sadar, Chittagong, Bangladesh</li>
                                    <li><i className="email"><FontAwesomeIcon icon={faEnvelope}/></i> jagadish.chakma401@gmail.com</li>
                                    <li><i className="phone"><FontAwesomeIcon icon={faPhone}/></i> 01878581794</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <div className="follow-me">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="">Projects</a></li>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Skills</a></li>
                                    <li><a href="">Achievements</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={12}>
                            <div className="summery-me">
                            Intermediate Full Stack Web Application Developer. 
                            Enjoying develop a web application according marketing strategy rules and added features more user friendly.
                                Also MERN STACK developer gaining knowledge MongoDB, Express.js. React.js, Node.js. 

                            
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="bottom-footer">
                    <p className="text-center mt-5">Design and Developed By Jagadish Chakma</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;